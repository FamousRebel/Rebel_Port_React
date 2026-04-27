import { createBrowserRouter } from 'react-router-dom';
import { routesConfig } from './config';
import { RouteBuilder } from '@/utils/routesUtils';


const builder = new RouteBuilder(routesConfig);

export const router = createBrowserRouter([
    ...builder.toReactRouterRoutes(),
]);