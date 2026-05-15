import { create } from "zustand";
import type { SearchTabs, SearchItem } from "@/types/SearchTypes";
import { immer } from "zustand/middleware/immer";

interface SearchStore {
  tabs: SearchTabs[];
  items: SearchItem[];
  selectedType: string;
  setSelectedType: (type: string) => void;
}
const useSearchStore = create<SearchStore>()(
  immer((set) => ({
    tabs: [
      { id: 1, name: "所有类型", type: "all" },
      { id: 2, name: "项目", type: "project" },
      { id: 3, name: "文章", type: "blog" },
    ],
    items: [
      {
        id: 1,
        title: "Rebel's Port",
        url: "/projects/rebel-port",
        description: "个人作品集网站，展示项目、博客和技能",
        type: "project",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 2,
        title: "React Dashboard",
        url: "/projects/react-dashboard",
        description: "基于 React 和 TypeScript 的管理后台模板",
        type: "project",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 3,
        title: "Next.js 博客系统",
        url: "/projects/nextjs-blog",
        description: "使用 Next.js 14 和 Tailwind CSS 构建的博客系统",
        type: "project",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 4,
        title: "Node.js API Server",
        url: "/projects/node-api",
        description: "高性能 RESTful API 服务器，支持身份验证和数据验证",
        type: "project",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 5,
        title: "Vue.js 电商平台",
        url: "/projects/vue-ecommerce",
        description: "基于 Vue 3 和 Pinia 的电商平台前端",
        type: "project",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 6,
        title: "Python 数据可视化",
        url: "/projects/python-visualization",
        description: "使用 Matplotlib 和 Seaborn 进行数据分析和可视化",
        type: "project",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 7,
        title: "Go 微服务框架",
        url: "/projects/go-microservice",
        description: "轻量级 Go 微服务架构，支持 gRPC 和 HTTP",
        type: "project",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 8,
        title: "Flutter 移动应用",
        url: "/projects/flutter-app",
        description: "跨平台移动应用，支持 iOS 和 Android",
        type: "project",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 9,
        title: "TypeScript 最佳实践",
        url: "/blog/typescript-best-practices",
        description: "深入探讨 TypeScript 的高级类型和最佳实践",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 10,
        title: "React Hooks 完全指南",
        url: "/blog/react-hooks-guide",
        description: "全面解析 React Hooks 的使用方法和场景",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 11,
        title: "Tailwind CSS 入门教程",
        url: "/blog/tailwind-css-tutorial",
        description: "从零开始学习 Tailwind CSS 实用样式框架",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 12,
        title: "Git 工作流程详解",
        url: "/blog/git-workflow",
        description: "Git 分支策略、代码审查和团队协作最佳实践",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 13,
        title: "Docker 容器化部署",
        url: "/blog/docker-deployment",
        description: "使用 Docker 和 Docker Compose 进行应用部署",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 14,
        title: "Kubernetes 入门指南",
        url: "/blog/kubernetes-basics",
        description: "K8s 核心概念、Pod、Service 和 Deployment 详解",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 15,
        title: "Web 性能优化",
        url: "/blog/web-performance",
        description: "前端性能优化策略：加载速度、渲染性能和用户体验",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 16,
        title: "响应式设计实践",
        url: "/blog/responsive-design",
        description: "响应式布局、媒体查询和移动端适配技巧",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 17,
        title: "GraphQL vs REST API",
        url: "/blog/graphql-vs-rest",
        description: "对比两种 API 设计方式的优缺点和适用场景",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 18,
        title: "前端安全防护",
        url: "/blog/frontend-security",
        description: "XSS、CSRF、CORS 和常见安全漏洞防护",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 19,
        title: "React 性能优化",
        url: "/blog/react-performance",
        description: "React 组件性能优化技巧：memo、useMemo、useCallback",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 20,
        title: "CI/CD 自动化部署",
        url: "/blog/ci-cd",
        description: "使用 GitHub Actions 和 GitLab CI 实现自动化部署",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 21,
        title: "MongoDB 数据库设计",
        url: "/blog/mongodb-design",
        description: "NoSQL 数据库设计模式和性能优化",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 22,
        title: "CSS Grid 布局指南",
        url: "/blog/css-grid",
        description: "CSS Grid 布局完整教程，打造复杂的网页布局",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 23,
        title: "JavaScript 异步编程",
        url: "/blog/javascript-async",
        description: "Promise、async/await 和异步模式详解",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
      {
        id: 24,
        title: "测试驱动开发 TDD",
        url: "/blog/tdd-practice",
        description: "测试驱动开发实践：单元测试、集成测试和 E2E 测试",
        type: "blog",
        imageUrl: "https://github.com/FamousRebel.png",
      },
    ],
    selectedType: "all",
    setSelectedType(type) {
      set({ selectedType: type });
    },
  })),
);

export default useSearchStore;
