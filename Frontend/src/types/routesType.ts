import type { ComponentType } from 'react';
import type { RouteObject } from 'react-router-dom';

export type RouteConfigType = RouteObject & {
    layout?: boolean;
    Component?: ComponentType;
    children?: RouteConfigType[];
    title?: string;
}