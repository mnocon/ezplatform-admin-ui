<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
namespace EzSystems\EzPlatformAdminUi\Behat\PageElement;

use DateTime;
use EzSystems\EzPlatformAdminUi\Behat\Helper\UtilityContext;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\Fields\Time;

class DateAndTimePopup extends Element
{
    public const ELEMENT_NAME = 'Date and time popup';

    private const DATETIME_FORMAT = 'm/d/Y, g:i:s a';

    public function __construct(UtilityContext $context)
    {
        parent::__construct($context);
        $this->fields = [
            'openedCalendar' => '.flatpickr-calendar.open',
            'pickerDaySelector' => '.flatpickr-day:not(.prevMonthDay):not(.nextMonthDay)',
            'pickerDayValue' => 'aria-label',
            'hourSelector' => '.flatpickr-hour',
            'minuteSelector' => '.flatpickr-minute',
            'nextMonthSelector' => '.flatpickr-next-month',
            'currentDaySelector' => '.flatpickr-day.today',
        ];
    }

    /**
     * @param DateTime $date Date to set
     */
    public function setDate(DateTime $date, string $dateFormat = self::DATETIME_FORMAT): void
    {
        $convertedDate = $date->format('Y-m-d');

        $currentDateElement = $this->context->findElement(sprintf('%s %s', $this->fields['openedCalendar'], $this->fields['currentDaySelector']));
        $currentDate = DateTime::createFromFormat($dateFormat, $currentDateElement->getAttribute($this->fields['pickerDayValue']));
        $interval = $date->diff($currentDate);
        $monthsDiff = 12 * $interval->y + $interval->m;

        for ($i = 0; $i < $monthsDiff; ++$i) {
            $this->switchToNextMonth();
        }

        $displayedDays = $this->context->findAllElements(sprintf('%s %s', $this->fields['openedCalendar'], $this->fields['pickerDaySelector']));

        foreach ($displayedDays as $day) {
            $currentValue = DateTime::createFromFormat($dateFormat, $day->getAttribute($this->fields['pickerDayValue']));
            $currentValue = $currentValue->format('Y-m-d');

            if ($currentValue === $convertedDate && $day->isVisible()) {
                $day->click();

                return;
            }
        }
    }

    public function switchToNextMonth(): void
    {
        $this->context->findElement(sprintf('%s %s', $this->fields['openedCalendar'], $this->fields['nextMonthSelector']))->click();
    }

    /**
     * @param string $hour Hour to set
     * @param string $minute Minute to set
     */
    public function setTime(string $hour, string $minute): void
    {
        $this->context->waitUntilElementIsVisible(sprintf('%s %s', $this->fields['openedCalendar'], $this->fields['hourSelector']));
        $visibleHour = $this->context->findElement(sprintf('%s %s', $this->fields['openedCalendar'], $this->fields['hourSelector']));
        $visibleHour->setValue($hour);

        $visibleMinute = $this->context->findElement(sprintf('%s %s', $this->fields['openedCalendar'], $this->fields['minuteSelector']));
        $visibleMinute->setValue($minute);
    }
}
