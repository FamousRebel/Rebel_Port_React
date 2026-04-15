import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import Links from './pages/Links';
import About from './pages/About';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/projects',
        element: <Projects />
    },
    {
        path: '/blog',
        element: <BlogList />
    },
    {
        path: '/blog/:id',
        element: <BlogDetail />
    },
    {
        path: '/links',
        element: <Links />
    },
    {
        path: '/about',
        element: <About />
    },
]);