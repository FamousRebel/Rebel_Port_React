import type { RouteConfigType, NavigationRouteType } from "@/types/route.types";
import type { RouteObject } from "react-router-dom";

export class RouteBuilder {
  private config: RouteConfigType[];

  constructor(config: RouteConfigType[]) {
    this.config = config;
  }

  // 从路由配置创建路由构建器
  static fromConfig(config: RouteConfigType[]) {
    return new RouteBuilder(config);
  }
  // 获取原始的路由配置
  getRoutesConfig(): RouteConfigType[] {
    return this.config;
  }

  // 获取用于React Router的路由结构
  toReactRouterRoutes(): RouteObject[] {
    return this.transformRoutes(
      this.config,
      this.mapToRouteObject,
      (route) => !route.isNotDevelop,
    );
  }

  // 获取用于导航菜单的路由结构
  toNavigationRoutes(): NavigationRouteType[] {
    const rootChildren = this.config[0]?.children || [];

    return this.transformRoutes(
      rootChildren,
      this.mapToNavigationRoute,
      (route) => !route.isNotDevelop && !route.isNotDisplayed && !!route.title,
    ); // 过滤掉没有标题的路由
  }

  // 递归转换路由配置为指定类型
  private transformRoutes<T>(
    routes: RouteConfigType[],
    mapper: (route: RouteConfigType) => T,
    filter: (route: RouteConfigType) => boolean,
  ): T[] {
    return routes.filter(filter).map((route) => {
      const item = { ...mapper(route) };
      if (route.children) {
        const children = this.transformRoutes(route.children, mapper, filter);
        // 👇 核心：只有子项长度 > 0 才添加 children
        if (children.length > 0) {
          (item as any).children = children;
        }
      }
      return item;
    });
  }

  // 将RouteConfigType转换为React Router的RouteObject
  private mapToRouteObject(route: RouteConfigType): RouteObject {
    const { isNotDisplayed, title, ...rest } = route;
    return rest as RouteObject;
  }

  // 将RouteConfigType转换为导航菜单的路由结构
  private mapToNavigationRoute(route: RouteConfigType): NavigationRouteType {
    const { title, path } = route;

    return {
      title: title || "",
      path: path || "",
    };
  }
}
