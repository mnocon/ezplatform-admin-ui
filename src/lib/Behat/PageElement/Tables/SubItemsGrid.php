<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
namespace EzSystems\EzPlatformAdminUi\Behat\PageElement\Tables;

use Behat\Mink\Element\NodeElement;
use EzSystems\EzPlatformAdminUi\Behat\Helper\UtilityContext;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\ElementFactory;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\Pagination;
use PHPUnit\Framework\Assert;

class SubItemsGrid
{
    public const ELEMENT_NAME = 'Sub-items Grid';

    public function __construct(UtilityContext $context, $containerLocator)
    {
        parent::__construct($context, $containerLocator);
        $this->fields['horizontalHeaders'] = $this->fields['list'] . ' .c-table-view__cell--head';
        $this->fields['listElement'] = $this->fields['list'] . ' .c-table-view-item__link';
        $this->fields['nthListElement'] = $this->fields['list'] . ' tr:nth-child(%d) .c-table-view-item__link';
        $this->fields['listElementType'] = $this->fields['list'] . ' tr:nth-child(%d) .c-table-view-item__cell--content-type';
        $this->fields['editButton'] = $this->fields['list'] . ' .c-table-view-item__btn--edit';
        $this->fields['noItems'] = $this->fields['list'] . ' .c-no-items';
    }

    /**
     * Click link element for sub-item with given name.
     *
     * @param string $name
     */
    public function clickListElement(string $name, ?string $contentType = null): void
    {
        $pagination = ElementFactory::createElement($this->context, Pagination::ELEMENT_NAME);
        $elementPositionInTable = $this->getElementPositionInTable($name, $contentType);
        $isElementInTable = (bool) $elementPositionInTable;

        while (!$isElementInTable && $pagination->isNextButtonActive()) {
            $pagination->clickNextButton();
            $elementPositionInTable = $this->getElementPositionInTable($name, $contentType);
            $isElementInTable = (bool) $elementPositionInTable;
        }

        Assert::assertTrue($isElementInTable, sprintf('There\'s no subitem %s on Sub-item list', $name));

        $this->context->findElement(sprintf($this->fields['nthListElement'], $elementPositionInTable))->click();
    }

    /**
     * Check if list contains link element with given name.
     *
     * @param string $name
     *
     * @return bool
     */
    public function isElementOnCurrentPage(string $name, ?string $contentType = null): bool
    {
        return (bool) $this->getElementPositionInTable($name, $contentType);
    }
}
