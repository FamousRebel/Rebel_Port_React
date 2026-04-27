import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import BlogList from '@/pages/Blog/List';
import BlogDetail from '@/pages/Blog/Detail';
import Links from '@/pages/Links';
import About from '@/pages/About';
import Layout from '@/components/Layout';
import type { RouteConfigType } from '@/types/routesType';


export const routesConfig: RouteConfigType[] = [
    {
        layout: true,
        Component: Layout,
        children: [
            { index: true, Component: Home },
            {
                path: '/home',
                title: '首页',
                Component: Home
            },
            {
                path: '/projects',
                title: '项目',
                Component: Projects
            },
            {
                path: '/blog',  
                title: '博客',
                Component: BlogList
            },
            {
                path: '/blog/:id',
                title: '博客详情',
                Component: BlogDetail
            },
            {
                path: '/links',
                title: '链接',
                Component: Links
            },
            {
                path: '/about',
                title: '关于',
                Component: About
            },
        ],
    }
]