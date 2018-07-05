<?php

/**
 * @copyright Copyright (C) eZ Systems AS. All rights reserved.
 * @license For full copyright and license information view LICENSE file distributed with this source code.
 */
namespace EzSystems\EzPlatformAdminUi\Behat\PageObject;

use EzSystems\EzPlatformAdminUi\Behat\Helper\InstallType;
use EzSystems\EzPlatformAdminUi\Behat\Helper\UtilityContext;
use EzSystems\EzPlatformPageBuilder\Tests\Behat\PageObject\EnterprisePageObjectFactory;

class PageObjectFactory
{
    private static $installType;

    /**
     * Creates a Page object based on given Page Name.
     *
     * @param UtilityContext $context
     * @param string $pageName Name of the Page to creator
     * @param null[]|string[] $parameters additional parameters
     */
    public static function createPage(UtilityContext $context, string $pageName, ?string ...$parameters)
    {
        /* Note: no return type to enable type-hinting */
        $factory = self::getFactory(self::$installType);

        return $factory::createPage($context, $pageName, ...$parameters);
    }

    public static function setInstallType(int $installType)
    {
        self::$installType = $installType;
    }

    /**
     * @param int $installType
     *
     * @return PlatformPageObjectFactory|EnterprisePageObjectFactory
     *
     * @throws \Exception
     */
    private static function getFactory(int $installType): PlatformPageObjectFactory
    {
        switch ($installType) {
            case InstallType::PLATFORM:
                return new PlatformPageObjectFactory();
            case InstallType::ENTERPRISE:
                return new EnterprisePageObjectFactory();
            default:
                throw new \Exception('Unrecognised install type');
        }
    }
}
