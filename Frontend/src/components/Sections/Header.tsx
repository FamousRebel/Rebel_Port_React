import React from 'react';

import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuContent, 
  NavigationMenuTrigger, 
  NavigationMenuLink, 
  navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';

import { Link, Route, useMatches } from 'react-router-dom';
import { RouteBuilder } from '@/utils/routesUtils';
import { routesConfig } from '@/routes/config';

const Header = () => {

    const builder = new RouteBuilder(routesConfig);
    
    console.log("ReactRouter:",builder.toReactRouterRoutes());
    console.log("NavigationRoute:",builder.toNavigationRoutes());
    const NavigationRoutes = builder.toNavigationRoutes();

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    {
                        NavigationRoutes.map((route) => (
                            <NavigationMenuItem key={route.title}>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to={route.path}>{route.title}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))
                    }
                    {/* <NavigationMenuItem>
                        <NavigationMenuTrigger>社交</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="w-96">
                            <NavigationMenuLink>Docs</NavigationMenuLink>
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>关于</NavigationMenuTrigger>
                        <NavigationMenuContent>
                        <ul className="w-96">
                            <NavigationMenuLink>Docs</NavigationMenuLink>
                        </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem> */}

                </NavigationMenuList>
            </NavigationMenu>
        </>
    );
};

export default Header;