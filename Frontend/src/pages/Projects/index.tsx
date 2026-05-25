import {
  ContributionChart,
  ResourceCard,
} from "@/components/Sections/Projects";
import type { ResourceItem } from "@/components/Sections/Projects/ResourceCard";

const projectsData: ResourceItem[] = [
  {
    id: 1,
    icon: "N",
    color: "#6366f1",
    title: "NovaUI Framework",
    subTitle: "Vue3 Component Library",
    description:
      "基于 TypeScript 的现代、高性能组件库，专注于极致的开发者体验和精心优化的设计系统。",
    tag: "Vue3",
    techStack: ["Vue3", "TypeScript", "Tailwindcss"],
    links: [{ type: "github", url: "#" }],
  },
  {
    id: 2,
    icon: "D",
    color: "#3b82f6",
    title: "DataFlow Vis",
    subTitle: "Real-time Data Visualization",
    description: "实时数据流可视化引擎，支持多源数据同步与动态图表渲染。",
    tag: "React",
    techStack: ["React", "D3", "WebSocket"],
    links: [
      { type: "github", url: "#" },
      { type: "web", url: "#" },
    ],
  },
  {
    id: 3,
    icon: "A",
    color: "#f97316",
    title: "AutoShield OS",
    subTitle: "Secure Operating System",
    description:
      "端到端加密操作系统套件，为中小团队提供开箱即用的安全解决方案。",
    tag: "Rust",
    techStack: ["Rust", "Tauri", "SQLite"],
    links: [
      { type: "github", url: "#" },
      { type: "web", url: "#" },
    ],
  },
  {
    id: 4,
    icon: "G",
    color: "#a855f7",
    title: "GraphCore Engine",
    subTitle: "Graph Database Engine",
    description: "高性能图数据库引擎，支持复杂关系查询的实时分析处理。",
    tag: "Vue3",
    techStack: ["Go", "RedisGraph", "gRPC"],
    links: [
      { type: "github", url: "#" },
      { type: "web", url: "#" },
    ],
  },
  {
    id: 5,
    icon: "E",
    color: "#22c55e",
    title: "EcoNode CMS",
    subTitle: "Headless Content Management",
    description:
      "轻量化 Headless CMS，专为现代 JAMStack 架构打造，支持多语言部署。",
    tag: "JavaScript",
    techStack: ["Node.js", "MongoDB", "Next.js"],
    links: [
      { type: "github", url: "#" },
      { type: "web", url: "#" },
    ],
  },
  {
    id: 6,
    icon: "P",
    color: "#ec4899",
    title: "Prism UI Kit",
    subTitle: "Design System Components",
    description:
      "一套基于主题变量系统构建的现代化组件 UI 组件，适配多种主流框架。",
    tag: "React",
    techStack: ["React", "CSS", "Storybook"],
    links: [
      { type: "github", url: "#" },
      { type: "web", url: "#" },
    ],
  },
];

const toolsData: ResourceItem[] = [
  {
    id: 1,
    icon: "E",
    color: "#06b6d4",
    title: "Excalidraw",
    subTitle: "Collaborative Drawing",
    description: "基于 Canvas 的协作绘图工具，支持手绘风格图形和实时协作。",
    links: "#",
  },
  {
    id: 2,
    icon: "J",
    color: "#f97316",
    title: "JSON Hero",
    subTitle: "JSON Viewer",
    description: "功能强大的 JSON 查看器，提供美观的 UI 和强大的数据搜索功能。",
    links: "#",
  },
  {
    id: 3,
    icon: "S",
    color: "#22c55e",
    title: "Squoosh",
    subTitle: "Image Compression",
    description: "Google 推出的在线图片压缩工具，支持多种格式的批量处理。",
    links: "#",
  },
  {
    id: 4,
    icon: "C",
    color: "#a855f7",
    title: "Color Hunt",
    subTitle: "Color Palette Library",
    description: "免费的调色板库，为你的设计提供即时的色彩灵感。",
    links: "#",
  },
  {
    id: 5,
    icon: "R",
    color: "#6366f1",
    title: "Regex101",
    subTitle: "Regex Testing Tool",
    description: "强大的正则表达式测试与调试工具，支持多种语言引擎。",
    links: "#",
  },
  {
    id: 6,
    icon: "P",
    color: "#3b82f6",
    title: "Postman",
    subTitle: "API Development Platform",
    description: "全球领先的 API 开发平台，简化构建、测试和调试 API 的过程。",
    links: "#",
  },
];

const Projects = () => {
  return (
    <div className="bg-dot-pattern">
      <ContributionChart />
      <div className="h-[calc(100vh-64px)] flex flex-col justify-center">
        <ResourceCard
          type="project"
          title="精选项目展示"
          subtitle="展示了我在前端架构、开源工具及技术实践中的探索与沉淀"
          tags={[
            { label: "全部", value: "all" },
            { label: "Vue3", value: "Vue3" },
            { label: "React", value: "React" },
            { label: "Rust", value: "Rust" },
            { label: "JavaScript", value: "JavaScript" },
          ]}
          list={projectsData}
        />
        <ResourceCard
          type="tool"
          title="常用工具"
          subtitle="工作中常用的在线辅助工具与资源"
          list={toolsData}
        />
      </div>
    </div>
  );
};
export default Projects;
