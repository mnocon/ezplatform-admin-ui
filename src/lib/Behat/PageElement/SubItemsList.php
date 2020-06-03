<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
namespace EzSystems\EzPlatformAdminUi\Behat\PageElement;

use EzSystems\EzPlatformAdminUi\Behat\Helper\UtilityContext;
use EzSystems\EzPlatformAdminUi\Behat\PageElement\Tables\SubItemsTable;

class SubItemsList extends Element
{
    /** @var string Name by which Element is recognised */
    public const ELEMENT_NAME = 'Sub-items List';
    /** @var SubItemsTable */
    public $table;

    public function __construct(UtilityContext $context, bool $isInGridView)
    {
        parent::__construct($context);
        $this->fields = [
            'list' => '.ez-sil',
            'listHeader' => '.ez-sil .m-sub-items__header',
            'listTable' => '.ez-sil .m-sub-items__list',
            'multiFileUploadButton' => '.ez-sil .m-sub-items__header .m-mfu__btn--upload',
            'tableSwitchButton' => '.ez-sil .m-sub-items__header .c-grid-switcher #table',
            'gridSwitchButton' => '.ez-sil .m-sub-items__header .c-grid-switcher #grid',
            'showMoreButton' => '.ez-sil .c-load-more .c-load-more__btn--load',
            'showMoreMessage' => '.ez-sil .c-load-more .c-load-more__message',
        ];
        $tableName = $isInGridView ? SubItemsGrid::ELEMENT_NAME : SubItemsTable::ELEMENT_NAME;
        $this->table = ElementFactory::createElement($context, $tableName, $this->fields['listTable']);
    }

    public function verifyVisibility(): void
    {
        $this->context->waitUntilElementIsVisible($this->fields['list']);
    }
}
