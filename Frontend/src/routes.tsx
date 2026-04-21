import { createBrowserRouter } from 'react-router';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import BlogList from '@/pages/Blog/List';
import BlogDetail from '@/pages/Blog/Detail';
import Links from '@/pages/Links';
import About from '@/pages/About';
import Layout from '@/components/Layout';

export const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
        { index: true, Component: Home },
        {
            path: '/',
            Component: Home
        },
        {
            path: '/projects',
            Component: Projects
        },
        {
            path: '/blog',
            Component: BlogList
        },
        {
            path: '/blog/:id',
            Component: BlogDetail
        },
        {
            path: '/links',
            Component: Links
        },
        {
            path: '/about',
            Component: About
        },
        ],
    }
]);