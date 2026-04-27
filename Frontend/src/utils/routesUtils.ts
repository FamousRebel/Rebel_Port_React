import type { RouteConfigType } from "@/types/routesType";
import type { RouteObject } from "react-router-dom";

export class RouteBuilder {
    private config: RouteConfigType [];

    constructor(config: RouteConfigType[]) {
        this.config = config;
    }

    getRoutesConfig(){
        return this.config;
    }
    toReactRouterRoutes(): RouteObject[] {
        return this.config.map(route => this.transformRoute(route))
    }
    private transformRoute(route: RouteConfigType): RouteObject {
        
        const { layout, children } = route;

        const routeObj = {
            ...route,
            children: children ? this.transformChildren(children) : undefined,
        }

        if(layout){
            delete routeObj.layout;
        }

        if(!children){
            delete routeObj.children;
        }

        delete routeObj.title;

        return routeObj;
    }

    private transformChildren(children: RouteConfigType[]): RouteObject[] {
        return children.map(child => this.transformRoute(child))
    }
}