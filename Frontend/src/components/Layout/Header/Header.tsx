import React, { useCallback, useEffect, useMemo, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { RouteBuilder } from "@/utils/routesUtils";
import { routesConfig } from "@/routes/config";
import Icons from "@/components/Common/Icons";
import { HeaderAvatar, HeaderSearch } from "@/components/Layout/Header";
import useSearchStore from "@/store/searchStore";
import { useShallow } from "zustand/react/shallow";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavigationRoutes = useMemo(() => {
    const builder = RouteBuilder.fromConfig(routesConfig);
    return builder.toNavigationRoutes();
  }, []);

  const { tabs, items } = useSearchStore(useShallow((state) => state));

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setIsOpen((open) => !open);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header className="fixed w-full top-0 z-50 border-b flex items-center justify-center backdrop-blur-lg">
      <div className="grid grid-cols-3 items-center h-16 px-2 gap-8 w-full max-w-7xl mx-auto">
        <div className="flex justify-start items-center">
          <Icons name="Rebel_Port_Logo" size={32} />
          <span className="ml-2 text-xl font-bold">Rebel's Port</span>
        </div>
        <NavigationMenu viewport={false} className="mx-auto">
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
        <div className="flex justify-end items-center self-center space-x-4">
          <HeaderSearch
            open={isOpen}
            onOpenChange={setIsOpen}
            tabs={tabs}
            value={items}
          />
          <Icons name="Bright" size={24} />
          <HeaderAvatar />
        </div>
      </div>
    </header>
  );
};

export default Header;
