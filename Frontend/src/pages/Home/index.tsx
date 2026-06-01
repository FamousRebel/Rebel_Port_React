import {
  Card,
  CardDescription,
  CardHorizontalLine,
} from "@/components/Common/Card";
import Icons from "@/components/Common/Icons";
import { BusinessCard, FeaturedSection } from "@/components/Sections/Home";
import { Badge } from "@/components/ui/badge";
import type { BaseBlogItem } from "@/types/blog.types";
import type { ProjectsItem } from "@/types/card.types";
import React from "react";

const blogData: BaseBlogItem[] = [
  {
    id: 1,
    date: "2023年11月20日",
    tag: "前端前沿",
    title: "深入理解 React Concurrent Mode",
    description:
      "探索并发模式如何改变 React 应用的渲染方式，以及如何利用其特性提升应用流畅度。",
    color: "#3b82f6",
    url: "/article/react-concurrent-mode",
  },
  {
    id: 2,
    date: "2023年11月05日",
    tag: "工程效能",
    title: "为什么敏捷开发在远程团队中依然有效",
    description:
      "在混合办公时代，如何调整敏捷实践以保持团队的高效产出和成员间的紧密协作。",
    color: "#10b981",
    url: "/article/agile-remote-team",
  },
  {
    id: 3,
    date: "2023年10月22日",
    tag: "技术趋势",
    title: "WebAssembly 的未来：不仅仅在浏览器中",
    description:
      "从边缘计算到服务器端应用，WebAssembly 正在如何重塑软件开发的边界。",
    color: "#8b5cf6",
    url: "/article/webassembly-future",
  },
  {
    id: 4,
    date: "2023年12月01日",
    tag: "性能优化",
    title: "大型 React 应用的打包优化实战",
    description:
      "从代码分割到 Tree Shaking，一步步降低应用体积，提升首屏加载速度。",
    color: "#f59e0b",
    url: "/article/react-build-optimize",
  },
  {
    id: 5,
    date: "2023年11月15日",
    tag: "前端前沿",
    title: "Vue 3 组合式 API 设计模式与最佳实践",
    description:
      "如何利用 Composition API 构建可复用、可维护的业务逻辑，打造高内聚低耦合的组件。",
    color: "#4f46e5",
    url: "/article/vue3-composition-api",
  },
  {
    id: 6,
    date: "2023年10月30日",
    tag: "工程效能",
    title: "CI/CD 流水线中前端自动化测试的落地",
    description:
      "单元测试、E2E 测试与覆盖率监控如何保障每次发布的质量，减少线上故障。",
    color: "#06b6d4",
    url: "/article/ci-cd-test",
  },
  {
    id: 7,
    date: "2023年09月18日",
    tag: "技术趋势",
    title: "低代码平台的现状与未来发展方向",
    description:
      "从拖拽式搭建到自定义组件扩展，低代码如何降低开发门槛，同时满足复杂业务需求。",
    color: "#ec4899",
    url: "/article/low-code-future",
  },
  {
    id: 8,
    date: "2023年12月05日",
    tag: "性能优化",
    title: "浏览器缓存策略：从 HTTP 头到 Service Worker",
    description:
      "合理利用强缓存与协商缓存，配合 Service Worker 实现离线优先的应用体验。",
    color: "#6366f1",
    url: "/article/browser-cache",
  },
  {
    id: 9,
    date: "2023年11月10日",
    tag: "前端前沿",
    title: "TypeScript 高级类型体操实战指南",
    description:
      "条件类型、映射类型与模板字面量类型如何帮助你写出更安全、更具表达力的代码。",
    color: "#14b8a6",
    url: "/article/ts-advanced-types",
  },
  {
    id: 10,
    date: "2023年10月15日",
    tag: "工程效能",
    title: "前端 Monorepo 架构在大型团队中的实践",
    description:
      "如何通过 Monorepo 统一管理多个包，提升依赖复用率，同时解决版本与发布问题。",
    color: "#f43f5e",
    url: "/article/monorepo-practice",
  },
];

const projectsData: ProjectsItem[] = [
  {
    id: 1,
    title: "Port-Engine",
    description:
      "下一代静态站点生成引擎，专注于性能和开发者体验，支持多框架渲染。",
    techStack: "Go",
    star: 452,
    date: "3 天前",
    color: "#3b82f6",
    url: "https://github.com/port-engine/port-engine",
  },
  {
    id: 2,
    title: "SwiftCMS",
    description:
      "轻量级无头 CMS，支持 Markdown 与实时预览，专为内容型网站打造。",
    techStack: "Rust",
    star: 1287,
    date: "1 周前",
    color: "#10b981",
    url: "https://github.com/swiftcms/swiftcms",
  },
  {
    id: 3,
    title: "FlowBuilder",
    description: "低代码工作流引擎，可视化拖拽编排，一键生成前后端接口。",
    techStack: "Node.js",
    star: 893,
    date: "2 天前",
    color: "#8b5cf6",
    url: "https://github.com/flowbuilder/flowbuilder",
  },
  {
    id: 4,
    title: "FastORM",
    description:
      "高性能 Go ORM 框架，支持多数据库方言与链式查询，内置 SQL 优化器。",
    techStack: "Go",
    star: 641,
    date: "5 天前",
    color: "#f59e0b",
    url: "https://github.com/fastorm/fastorm",
  },
  {
    id: 5,
    title: "VuePress-Plus",
    description: "VuePress 增强版，内置全文搜索、深色模式与组件化文档主题。",
    techStack: "TypeScript",
    star: 2156,
    date: "4 小时前",
    color: "#4f46e5",
    url: "https://github.com/vuepress-plus/vuepress-plus",
  },
  {
    id: 6,
    title: "EdgeCache",
    description: "轻量级边缘缓存服务，支持 Redis 协议兼容，毫秒级响应。",
    techStack: "Rust",
    star: 378,
    date: "2 周前",
    color: "#06b6d4",
    url: "https://github.com/edgecache/edgecache",
  },
  {
    id: 7,
    title: "ReactUI-Kit",
    description: "企业级 React 组件库，支持主题定制与无障碍适配，开箱即用。",
    techStack: "TypeScript",
    star: 3529,
    date: "1 天前",
    color: "#ec4899",
    url: "https://github.com/reactui-kit/reactui-kit",
  },
  {
    id: 8,
    title: "GoMicro-Gateway",
    description: "微服务 API 网关，支持限流、熔断与灰度发布，配置零重启生效。",
    techStack: "Go",
    star: 724,
    date: "6 天前",
    color: "#6366f1",
    url: "https://github.com/gomicro/gateway",
  },
  {
    id: 9,
    title: "DataViz-Lite",
    description: "轻量级数据可视化工具，拖拽式配置图表，支持导出图片与 PDF。",
    techStack: "JavaScript",
    star: 967,
    date: "3 周前",
    color: "#14b8a6",
    url: "https://github.com/dataviz-lite/dataviz-lite",
  },
  {
    id: 10,
    title: "NestAdmin",
    description: "基于 NestJS 的后台管理模板，内置权限管理与动态菜单配置。",
    techStack: "TypeScript",
    star: 1543,
    date: "12 小时前",
    color: "#f43f5e",
    url: "https://github.com/nestjs/nest-admin",
  },
];

const Home = () => {
  return (
    <div className="bg-dot-pattern">
      <BusinessCard />
      <div className="h-[calc(100vh-64px)] flex flex-col justify-center">
        <FeaturedSection
          type="Projects"
          title="最新项目"
          sectionIcon="layoutGrid"
          list={projectsData}
          renderItem={(item: ProjectsItem) => (
            <Card cursor="pointer" className="bg-[#f9fafb]">
              <div className="flex justify-between">
                <div
                  className={
                    "group-hover:text-(--hover-color) transition-colors"
                  }
                  style={
                    { "--hover-color": item?.color } as React.CSSProperties
                  }
                >
                  {item?.title}
                </div>
                <Icons
                  name="link"
                  size={12}
                  className="group-hover:text-[#000000] text-[#666666]"
                />
              </div>
              <CardDescription className="line-clamp-2 overflow-hidden text-ellipsis">
                {item?.description}
              </CardDescription>
              <CardHorizontalLine />
              <div className="flex justify-between text-xs gap-4 text-[#666666]">
                <div className="flex flex-none items-center gap-1">
                  <span
                    className={"inline-block w-3 h-3 rounded-full"}
                    style={{ backgroundColor: item?.color }}
                  />
                  {item?.techStack}
                </div>
                <div className="flex flex-auto items-center">
                  <Icons name="star" size={12} /> {item?.star}
                </div>
                <div className="flex-none">{item?.date}</div>
              </div>
            </Card>
          )}
        />
        <FeaturedSection
          type="Blog"
          title="近期文章"
          sectionIcon="rss"
          list={blogData}
          renderItem={(item: BaseBlogItem) => (
            <Card cursor="pointer" className="bg-[#f9fafb]">
              <div className="flex gap-4 items-center text-xs text-[#666666] mb-4">
                {item?.date}
                <Badge
                  className="w-20 h-6"
                  variant="secondary"
                  style={
                    {
                      backgroundColor: `${item?.color}20`,
                      color: item?.color,
                    } as React.CSSProperties
                  }
                >
                  {item?.tag}
                </Badge>
              </div>
              <div className="text-xl font-bold line-clamp-2 overflow-hidden text-ellipsis">
                {item?.title}
              </div>
              <CardDescription className="line-clamp-2 overflow-hidden text-ellipsis">
                {item?.description}
              </CardDescription>
            </Card>
          )}
        />
      </div>
    </div>
  );
};
export default Home;
