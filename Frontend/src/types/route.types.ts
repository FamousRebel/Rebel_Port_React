import type { ComponentType } from 'react';
import type { RouteObject } from 'react-router-dom';

type RouteConfigType = RouteObject & {
    icon?: React.ReactNode;
    Component?: ComponentType;
    children?: RouteConfigType[];
    title?: string;
    isNotDisplayed?: boolean; // 是否在导航菜单中显示
    isNotDevelop?: boolean; // 是否为未开发路由
}

type NavigationRouteType = {
    icon?: React.ReactNode;
    path: string;
    title: string;
    children?: NavigationRouteType[];
}

export {
    type RouteConfigType,
    type NavigationRouteType,
}
