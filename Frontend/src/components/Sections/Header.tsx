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
    
    console.log("routes:",builder.toReactRouterRoutes());
    
    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/Home">首页</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/Projects">项目</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/blog">博客</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/links">友链</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                        <Link to="/about">关于</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>

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