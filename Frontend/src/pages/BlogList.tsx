import {
  BlogListHero,
  BlogCard,
  AuthorInfo,
  CategoryFilter,
  TagCloud,
} from "@/components/Sections/BlogList";
import type { BlogItem } from "@/types/blog.types";
import React from "react";

const blogData: BlogItem[] = [
  {
    id: 1,
    date: "2024年12月15日",
    tag: "前端前沿",
    title: "深入理解 React Concurrent Mode",
    description:
      "探索并发模式如何改变 React 应用的渲染方式，以及如何利用其特性提升应用流畅度。",
    url: "/article/react-concurrent-mode",
    techStack: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
    ],
    wordCount: 15680,
    views: 125680,
    comments: 342,
    star: 5890,
    cover:
      "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=modern%20React%20web%20development%20abstract%20illustration&image_size=landscape_4_3",
  },
  {
    id: 2,
    date: "2024年11月28日",
    tag: "性能优化",
    title: "Webpack 5 性能优化实战指南",
    description:
      "从打包速度到产物体积，全面优化你的 Webpack 构建流程，让你的项目飞起来。",
    url: "/article/webpack-optimization",
    techStack: [
      { name: "Webpack", color: "#8DD6F9" },
      { name: "Vite", color: "#646CFF" },
      { name: "Node.js", color: "#339933" },
    ],
    wordCount: 12350,
    views: 98450,
    comments: 286,
    star: 4230,
    cover:
      "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=webpack%20build%20optimization%20abstract%20tech%20illustration&image_size=landscape_4_3",
  },
  {
    id: 3,
    date: "2024年11月10日",
    tag: "后端技术",
    title: "Node.js 微服务架构设计与实践",
    description:
      "基于 Node.js 构建高可用微服务系统，涵盖服务发现、负载均衡、熔断降级等核心概念。",
    url: "/article/nodejs-microservices",
    techStack: [
      { name: "Node.js", color: "#339933" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
    ],
    wordCount: 18920,
    views: 156780,
    comments: 456,
    star: 7890,
    cover:
      "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=microservices%20architecture%20nodejs%20cloud%20infrastructure&image_size=landscape_4_3",
  },
  {
    id: 4,
    date: "2024年10月25日",
    tag: "前端框架",
    title: "Vue 3 组合式 API 深度解析",
    description:
      "深入理解 Vue 3 的组合式 API，掌握 Composition API 的设计思想和最佳实践。",
    url: "/article/vue3-composition-api",
    techStack: [
      { name: "Vue.js", color: "#42B883" },
      { name: "Pinia", color: "#E64A19" },
    ],
    wordCount: 14520,
    views: 112340,
    comments: 312,
    star: 5120,
    cover:
      "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=vue%20framework%20modern%20frontend%20abstract%20design&image_size=landscape_4_3",
  },
  {
    id: 5,
    date: "2024年10月08日",
    tag: "数据库",
    title: "PostgreSQL 高级查询优化技巧",
    description:
      "从索引设计到查询计划分析，全方位提升 PostgreSQL 数据库性能，应对海量数据挑战。",
    url: "/article/postgresql-optimization",
    techStack: [
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Redis", color: "#DC382D" },
    ],
    wordCount: 16780,
    views: 89650,
    comments: 234,
    star: 3890,
    cover:
      "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=postgresql%20database%20query%20optimization%20data%20visualization&image_size=landscape_4_3",
  },
  {
    id: 6,
    date: "2024年09月20日",
    tag: "前端工程化",
    title: "Monorepo 架构最佳实践",
    description:
      "探索 Monorepo 的优势与挑战，学习如何使用 Turborepo 构建高效的前端工程体系。",
    url: "/article/monorepo-best-practices",
    techStack: [
      { name: "Turborepo", color: "#FF6B6B" },
      { name: "NX", color: "#143055" },
      { name: "pnpm", color: "#F69220" },
    ],
    wordCount: 13240,
    views: 76540,
    comments: 198,
    star: 3210,
    cover:
      "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=monorepo%20architecture%20code%20organization%20modern%20dev&image_size=landscape_4_3",
  },
  {
    id: 7,
    date: "2024年09月05日",
    tag: "安全",
    title: "Web 应用安全防护指南",
    description:
      "从 XSS 到 CSRF，从 SQL 注入到 SSRF，全面了解 Web 安全威胁与防护策略。",
    url: "/article/web-security-guide",
    techStack: [
      { name: "OWASP", color: "#EF4444" },
      { name: "CSP", color: "#8B5CF6" },
    ],
    wordCount: 17890,
    views: 145230,
    comments: 423,
    star: 6540,
    cover:
      "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=web%20security%20shield%20protection%20cyber%20defense&image_size=landscape_4_3",
  },
  {
    id: 8,
    date: "2024年08月18日",
    tag: "云原生",
    title: "Serverless 架构设计模式",
    description:
      "探索 Serverless 的核心概念，学习如何设计无服务器应用，降低运维成本。",
    url: "/article/serverless-patterns",
    techStack: [
      { name: "AWS Lambda", color: "#FF9900" },
      { name: "Vercel", color: "#000000" },
      { name: "Cloudflare", color: "#F38020" },
    ],
    wordCount: 15120,
    views: 108960,
    comments: 289,
    star: 4670,
    cover:
      "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=serverless%20cloud%20computing%20modern%20architecture&image_size=landscape_4_3",
  },
];

const BlogList = () => {
  return (
    <div className="min-h-screen bg-[#f8f6f6]">
      <BlogListHero />
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {blogData.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:col-span-1 space-y-6">
            <AuthorInfo />
            <CategoryFilter />
            <TagCloud />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogList;
