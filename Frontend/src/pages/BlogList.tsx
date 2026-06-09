import {
  BlogListHero,
  BlogCard,
  LoadMore,
  AuthorInfo,
  CategoryFilter,
  TagCloud,
  ArchiveWidget,
} from "@/components/Sections/BlogList";
import type { BlogItem } from "@/types/blog.types";
import React from "react";

const blogData: BlogItem[] = [
  {
    id: 1,
    date: "2024-12-15",
    tag: "前端前沿",
    title: "深入理解 React Concurrent Mode",
    description:
      "探索并发模式如何改变 React 应用的渲染方式，以及如何利用其特性提升应用流畅度。",
    blogId: 1,
    techStack: [
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
    ],
    wordCount: 15680,
    views: 125680,
    message: 342,
    star: 5890,
    cover: "https://www.loliapi.com/bg/",
  },
  {
    id: 2,
    date: "2024-11-28",
    tag: "性能优化",
    title: "Webpack 5 性能优化实战指南",
    description:
      "从打包速度到产物体积，全面优化你的 Webpack 构建流程，让你的项目飞起来。",
    blogId: 2,
    techStack: [
      { name: "Webpack", color: "#8DD6F9" },
      { name: "Vite", color: "#646CFF" },
      { name: "Node.js", color: "#339933" },
    ],
    wordCount: 12350,
    views: 98450,
    message: 286,
    star: 4230,
    cover: "https://www.loliapi.com/bg/",
  },
  {
    id: 3,
    date: "2024-11-10",
    tag: "后端技术",
    title: "Node.js 微服务架构设计与实践",
    description:
      "基于 Node.js 构建高可用微服务系统，涵盖服务发现、负载均衡、熔断降级等核心概念。",
    blogId: 3,
    techStack: [
      { name: "Node.js", color: "#339933" },
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
    ],
    wordCount: 18920,
    views: 156780,
    message: 456,
    star: 7890,
    cover: "https://www.loliapi.com/bg/",
  },
  {
    id: 4,
    date: "2024-10-25",
    tag: "前端框架",
    title: "Vue 3 组合式 API 深度解析",
    description:
      "深入理解 Vue 3 的组合式 API，掌握 Composition API 的设计思想和最佳实践。",
    blogId: 4,
    techStack: [
      { name: "Vue.js", color: "#42B883" },
      { name: "Pinia", color: "#E64A19" },
    ],
    wordCount: 14520,
    views: 112340,
    message: 312,
    star: 5120,
    cover: "https://www.loliapi.com/bg/",
  },
  {
    id: 5,
    date: "2024-10-08",
    tag: "数据库",
    title: "PostgreSQL 高级查询优化技巧",
    description:
      "从索引设计到查询计划分析，全方位提升 PostgreSQL 数据库性能，应对海量数据挑战。",
    blogId: 5,
    techStack: [
      { name: "PostgreSQL", color: "#4169E1" },
      { name: "Redis", color: "#DC382D" },
    ],
    wordCount: 16780,
    views: 89650,
    message: 234,
    star: 3890,
    cover: "https://www.loliapi.com/bg/",
  },
  {
    id: 6,
    date: "2024-09-20",
    tag: "前端工程化",
    title: "Monorepo 架构最佳实践",
    description:
      "探索 Monorepo 的优势与挑战，学习如何使用 Turborepo 构建高效的前端工程体系。",
    blogId: 6,
    techStack: [
      { name: "Turborepo", color: "#FF6B6B" },
      { name: "NX", color: "#143055" },
      { name: "pnpm", color: "#F69220" },
    ],
    wordCount: 13240,
    views: 76540,
    message: 198,
    star: 3210,
    cover: "https://www.loliapi.com/bg/",
  },
  {
    id: 7,
    date: "2024-09-05",
    tag: "安全",
    title: "Web 应用安全防护指南",
    description:
      "从 XSS 到 CSRF，从 SQL 注入到 SSRF，全面了解 Web 安全威胁与防护策略。",
    blogId: 7,
    techStack: [
      { name: "OWASP", color: "#EF4444" },
      { name: "CSP", color: "#8B5CF6" },
    ],
    wordCount: 17890,
    views: 145230,
    message: 423,
    star: 6540,
    cover: "https://www.loliapi.com/bg/",
  },
  {
    id: 8,
    date: "2024-08-18",
    tag: "云原生",
    title: "Serverless 架构设计模式",
    description:
      "探索 Serverless 的核心概念，学习如何设计无服务器应用，降低运维成本。",
    blogId: 8,
    techStack: [
      { name: "AWS Lambda", color: "#FF9900" },
      { name: "Vercel", color: "#000000" },
      { name: "Cloudflare", color: "#F38020" },
    ],
    wordCount: 15120,
    views: 108960,
    message: 289,
    star: 4670,
    cover: "https://www.loliapi.com/bg/",
  },
];

const BlogList = () => {
  const tags = blogData.flatMap((item) =>
    item.techStack.map((tech) => ({
      label: tech.name,
      color: tech.color,
    }))
  );

  const tagCounts = blogData.reduce((acc, item) => {
    acc[item.tag] = (acc[item.tag] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = Object.entries(tagCounts).map(([label, count]) => ({
    label,
    count,
  }));

  const articleDates = blogData.map((item) => item.date);

  return (
    <div className="min-h-screen bg-[#f8f6f6]">
      <BlogListHero />
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-[1fr_320px] gap-8 items-start">
          <div className="space-y-6 w-full">
            {blogData.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
            <LoadMore />
          </div>
          <div className="w-80 flex flex-col gap-8 sticky top-20">
            <AuthorInfo />
            <ArchiveWidget articleDates={articleDates} />
            <CategoryFilter categories={categories} />
            <TagCloud tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
