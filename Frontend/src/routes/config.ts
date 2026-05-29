import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import BlogList from "@/pages/BlogList";
import BlogDetail from "@/pages/BlogDetail";
import Links from "@/pages/Links";
import About from "@/pages/About";
import NotFound from "@/pages/404";
import Layout from "@/components/Layout";
import type { RouteConfigType } from "@/types/routesType";

export const routesConfig: RouteConfigType[] = [
  {
    // layout: true,
    Component: Layout,
    children: [
      { index: true, Component: Home },
      {
        path: "/home",
        title: "首页",
        Component: Home,
      },
      {
        path: "/projects",
        title: "项目",
        Component: Projects,
      },
      {
        path: "/blog",
        title: "博客",
        children: [
          { index: true, Component: BlogList },
          {
            path: ":id",
            title: "博客详情",
            Component: BlogDetail,
            isNotDisplayed: true,
          },
        ],
      },
      {
        path: "/links",
        title: "友链",
        Component: Links,
      },
      {
        path: "/social",
        title: "社交",
        isNotDevelop: true,
        children: [
          { index: true, Component: Links },
          {
            path: "Dynamic",
            title: "动态",
            isNotDevelop: true,
          },
          {
            path: "message",
            title: "留言",
            isNotDevelop: true,
          },
        ],
      },
      {
        path: "/about",
        title: "关于",
        children: [
          { index: true, Component: About },
          {
            path: "site",
            title: "关于本站",
            isNotDevelop: true,
          },
          {
            path: "me",
            title: "关于我",
            isNotDevelop: true,
          },
          {
            path: "resume",
            title: "个人简历",
            isNotDevelop: true,
          },
          {
            path: "contact",
            title: "联系我",
            isNotDevelop: true,
          },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
];
