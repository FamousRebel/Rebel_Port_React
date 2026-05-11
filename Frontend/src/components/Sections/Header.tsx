import React from "react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";
import { RouteBuilder } from "@/utils/routesUtils";
import { routesConfig } from "@/routes/config";
import Icons from "@/components/Common/Icons";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const Header = () => {
  const builder = new RouteBuilder(routesConfig);
  console.log(builder.toNavigationRoutes());
  const NavigationRoutes = builder.toNavigationRoutes();

  return (
    <header className="fixed w-full top-0 z-50 border-b flex items-center justify-center">
      <div className="grid grid-cols-3 items-center justify-between h-16 px-4">
        <div className="flex justify-start items-center">
          <Icons name="Rebel_Port_Logo" size={32} />
          <span className="ml-2 text-xl font-bold">Rebel's Port</span>
        </div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {NavigationRoutes.map((route) =>
              !route?.children ? (
                <NavigationMenuItem key={route.title}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link to={route.path}>{route.title}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={route.title}>
                  <NavigationMenuTrigger>{route.title}</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className="
                      data-[motion=from-end]: slide-in-from-right-0!
                      data-[motion=from-start]:slide-in-from-left-0!
                      data-[motion=to-end]:slide-out-to-right-0! 
                      data-[motion=to-start]:slide-out-to-left-0!
                    "
                  >
                    <ul>
                      {route.children.map((child) => (
                        <NavigationMenuLink
                          key={child.title}
                          asChild
                          className={navigationMenuTriggerStyle()}
                        >
                          <Link to={child.path}>{child.title}</Link>
                        </NavigationMenuLink>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex justify-end items-center">
          <div></div>
          <Avatar>
            <AvatarImage src="https://github.com/FamousRebel.png" />
            <AvatarFallback>
              <Icons name="User" size={24} />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
