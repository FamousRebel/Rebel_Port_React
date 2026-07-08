import React, { useEffect, useState } from "react";
import {
  BlogHero,
  BlogMarkdown,
  InteractionBar,
  BlogNavigation,
  CommentSection,
  BlogToc,
  RelationGraph,
  ScrollWidget,
} from "@/components/Sections/BlogDetail";
import type { BlogPostMeta } from "@/components/Sections/BlogDetail/BlogHero";
import type { MarkdownSection } from "@/components/Sections/BlogDetail/BlogMarkdown";
import type { InteractionData } from "@/components/Sections/BlogDetail/InteractionBar";
import type { AdjacentPost } from "@/components/Sections/BlogDetail/BlogNavigation";
import type {
  CommentData,
  CommentFormData,
} from "@/components/Sections/BlogDetail/CommentSection";
import type { TocItem } from "@/components/Sections/BlogDetail/BlogToc";
import type {
  GraphNode,
  GraphEdge,
} from "@/components/Sections/BlogDetail/RelationGraph";
import { useNavigate, useParams } from "react-router-dom";

// ============================================================
// BlogDetail 页面 — 组合所有 BlogDetail Section 组件
//
// 布局：
// ┌──────────────────────────────────────────────────────┐
// │  BlogHero (全宽)                                      │
// ├──────────────────────────┬───────────────────────────┤
// │  main-content (1fr)       │  aside (300px)             │
// │  ├─ BlogMarkdown          │  ├─ RelationGraph          │
// │  ├─ BlogNavigation        │  └─ BlogToc                │
// │  ├─ InteractionBar        │                            │
// │  └─ CommentSection        │                            │
// ├──────────────────────────┴───────────────────────────┤
// │  ScrollWidget (fixed, bottom-right)                   │
// └──────────────────────────────────────────────────────┘
// ============================================================

// ======================== 模拟数据源 ========================
// 后续接入后端时，分别替换为对应的 API 请求

interface blogDataSourceMeta extends BlogPostMeta {
  markDownSource: String; // md源数据
  markDownHTML?: string; // mdHTML数据
  prevPost: AdjacentPost; // 上一篇信息
  nextPost: AdjacentPost; // 下一篇信息
}

const blogDataSource: blogDataSourceMeta = {
  id: 1001,
  title: "深入理解 JavaScript 闭包",
  coverImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800",
  publishDate: "2024-06-28 09:30",
  category: "前端开发",
  wordCount: 2580,
  views: 1234,
  likes: 89,
  techStackTags: ["JavaScript", "闭包", "作用域", "高级编程"],
  markDownSource:
    "---\ntitle: 深入理解 JavaScript 闭包\ndate: 2024-06-28\ntags: [JavaScript, 闭包]\n---\n\n# 什么是闭包？\n\n闭包（Closure）是 JavaScript 中最核心、最强大的特性之一。简单来说，**闭包是指一个函数可以记住并访问其词法作用域中的变量，即使该函数在其词法作用域之外执行**。\n\n## 闭包的形成条件\n\n要形成闭包，需要满足三个条件：\n\n1. 存在一个**内部函数**\n2. 内部函数**引用了外部函数的变量**\n3. 内部函数在外部函数**外部被调用**\n\n### 基本示例\n\n```javascript\nfunction outer() {\n  let message = 'Hello, Closure!';\n  \n  function inner() {\n    console.log(message); // 访问外部变量\n  }\n  \n  return inner;\n}\n\nconst myFunc = outer();\nmyFunc(); // 输出 'Hello, Closure!'\n```\n\n## 闭包的应用场景\n\n- **数据私有化**：模拟私有变量\n- **函数工厂**：生成定制函数\n- **事件监听**：保存状态\n- **防抖/节流**：维护计时器\n\n### 实际案例：计数器\n\n```javascript\nfunction createCounter() {\n  let count = 0;\n  \n  return {\n    increment: function() { count++; return count; },\n    decrement: function() { count--; return count; },\n    getCount: function() { return count; }\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\nconsole.log(counter.getCount());  // 2\n```\n\n## 闭包的内存管理\n\n闭包会保留外部变量的引用，如果不当使用可能导致内存泄漏。在不需要时，应手动解除引用（设为 `null`）。\n\n---\n\n> **总结**：闭包是 JavaScript 的基石之一，掌握它能让你的代码更加优雅和强大。",
  markDownHTML:
    "<h1>什么是闭包？</h1>\n<p>闭包（Closure）是 JavaScript 中最核心、最强大的特性之一。简单来说，<strong>闭包是指一个函数可以记住并访问其词法作用域中的变量，即使该函数在其词法作用域之外执行</strong>。</p>\n<h2>闭包的形成条件</h2>\n<p>要形成闭包，需要满足三个条件：</p>\n<ol>\n<li>存在一个<strong>内部函数</strong></li>\n<li>内部函数<strong>引用了外部函数的变量</strong></li>\n<li>内部函数在外部函数<strong>外部被调用</strong></li>\n</ol>\n<h3>基本示例</h3>\n<pre><code class=\"language-javascript\">function outer() {\n  let message = 'Hello, Closure!';\n  \n  function inner() {\n    console.log(message);\n  }\n  \n  return inner;\n}\n\nconst myFunc = outer();\nmyFunc(); // 输出 'Hello, Closure!'\n</code></pre>\n<h2>闭包的应用场景</h2>\n<ul>\n<li><strong>数据私有化</strong>：模拟私有变量</li>\n<li><strong>函数工厂</strong>：生成定制函数</li>\n<li><strong>事件监听</strong>：保存状态</li>\n<li><strong>防抖/节流</strong>：维护计时器</li>\n</ul>\n<h3>实际案例：计数器</h3>\n<pre><code class=\"language-javascript\">function createCounter() {\n  let count = 0;\n  \n  return {\n    increment: function() { count++; return count; },\n    decrement: function() { count--; return count; },\n    getCount: function() { return count; }\n  };\n}\n\nconst counter = createCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\nconsole.log(counter.getCount());  // 2\n</code></pre>\n<h2>闭包的内存管理</h2>\n<p>闭包会保留外部变量的引用，如果不当使用可能导致内存泄漏。在不需要时，应手动解除引用（设为 <code>null</code>）。</p>\n<blockquote>\n<p><strong>总结</strong>：闭包是 JavaScript 的基石之一，掌握它能让你的代码更加优雅和强大。</p>\n</blockquote>\n",
  prevPost: {
    id: 1000,
    title: "CSS Grid 布局完全指南",
    url: "/posts/css-grid-guide",
  },
  nextPost: {
    id: 1002,
    title: "React Hooks 实战技巧",
    url: "/posts/react-hooks-tips",
  },
};

const postMeta: BlogPostMeta = {
  id: 1,
  title: "深入理解 React 并发模式与 Fiber 架构",
  coverImage:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuArMXFFNwq-anLPcg8EXeMxMq9j-IFvR4BgzkCQ3L3Fq9DtA5zsgbVnnsfVnXgQMRougsTvhVfIbJZDcQh5EVIENx9Ls91nTlD0J5HDnTI6wCjGnaHen6sxWNXphWEfZAVAsmvEAX4oVarHq-cMdXU6OxzYQimuSWEZn_Jc3fVtRH92ZeZZNz6SVh3_OmSu94_MBcrhQ8XLDNOPPOpCtwDrXAMeKBQCINflRhiWPzeNm2j7A9nyE5jK-Ff9sU2KLIdXqdlvvcOvFa0",
  publishDate: "2023-10-24 14:20",
  category: "技术教程",
  wordCount: 3500,
  views: 12840,
  likes: 1245,
  techStackTags: ["React", "Frontend", "Architecture"],
};

const markdownSections: MarkdownSection[] = [
  {
    id: "intro",
    type: "quote",
    content:
      "React Fiber 是 React 16 中对核心算法的重新实现。其主要目标是实现增量渲染：能够将渲染工作分割成块，并将其分散到多个帧中。",
  },
  {
    id: "intro-callout",
    type: "callout",
    content: '"Fiber 是 React 核心算法的重新实现。其主要目标是实现增量渲染。"',
  },
  {
    id: "nodes",
    title: "Fiber 节点：工作单元",
    type: "paragraph",
    content:
      '每个 React 元素都有一个对应的 Fiber 节点。与传统的虚拟 DOM 不同，Fiber 节点包含了更多关于待执行"工作"的元数据。',
  },
  {
    id: "code-fiber",
    type: "code",
    codeLanguage: "javascript",
    content: `const FiberNode = {
  // 实例标签 (Instance tags)
  tag: WorkTag,
  key: null | string,
  elementType: any,

  // Fiber 树结构 (Fiber Hierarchy)
  return: Fiber | null,
  child: Fiber | null,
  sibling: Fiber | null,

  // 工作状态 (Work state)
  pendingProps: any,
  memoizedProps: any,
  updateQueue: mixed,
  memoizedState: any,
};`,
  },
  {
    id: "diagram",
    title: "Fiber 树可视化",
    type: "diagram",
    content: "展示父子节点与兄弟节点指向的交互图",
    diagramAlt: "展示父子节点与兄弟节点指向的交互图",
  },
  {
    id: "reconciliation",
    title: "协调算法与 Diff 过程",
    type: "paragraph",
    content:
      "协调过程被分为两个阶段：<strong>渲染阶段 (Render Phase)</strong>（异步/可中断）和 <strong>提交阶段 (Commit Phase)</strong>（同步/原子性）。这使得 React 能够将主线程让出给高优先级的任务，例如用户输入。",
  },
];

const interactionData: InteractionData = {
  likes: 1245,
  isLiked: false,
};

const comments: CommentData[] = [
  {
    id: 1,
    authorName: "Alex Chen",
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD_Kv92bX2Jx4I68LxQoiPgZ2MCRax5r-QBfukdMVlEHLbjl9M2dIW_qsRHysxQ5NBx0yFF9if5z-sdzWA8MqSU6O6UljC1sxUkEI0b8izz_pe01ALudBMrN_6Xhnyw6bSJpzZ89Cchl0B0TH0GrHogJf1yV3BmO4ienRuJyhoAgFbO4R3XbTmM-nrpgbZZp4L-ClgYFb39bONx6bQPDjGyDO-VlcUTzjxY1etBNOWidpygqAaVu5BBXY7k9rlit4csWZATALfUckE",
    content:
      "这篇文章讲得非常透彻！特别是关于 Fiber 节点作为工作单元的解释，解决了困扰我很久的疑惑。",
    time: "55 分钟前",
    location: "杭州",
    device: "Windows 10",
    browser: "Edge 142.0.0.0",
    replies: [
      {
        id: 11,
        authorName: "Sarah Zhang",
        authorAvatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDIgmOSSxZqyKBOUfdT09D9H-beQUXBkwRqmDkbesxPct44O51ubsUvBUA4BIK5BSyXeN3obfEcAF7UP8AzYkaHMBVoPl8aCMBo0X6DG1gXwcyEGZpZuUhSAb1buaTlLi_5BaWBMSbrdjRopdYHGmbC-4EGW0l0yf4O0qHLd1LtPNDL3ZeqsNVdr9jN1X-RKV2LG6m9_dIdh66MxNSmmX0s6yjc_Snbf5o3S-uLYiXDg_ZC0fF3fJCwFFjbuHZc6vZ02gqnrdPHzk0",
        content:
          "回复 @Alex Chen 同感，特别是 Render Phase 可以中断这个点，是实现流畅 UI 的核心。",
        time: "55 分钟前",
        location: "北京",
        device: "macOS",
        browser: "Chrome",
      },
    ],
  },
  {
    id: 2,
    authorName: "Mike Wilson",
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUXw1YQAkJIiwJZMoVogw-UwgkL7WU_UpVBjgGWOrAslGEU4-oEqFnt47eK48IOPXhjWfWxCrSTN_lbs829w1z2lhfJb0YXjsUW_m7ShAB-1IlJWRN8rEAe9-wy0c-HCAuE7JpGItbvjG0diH3y118zWtI4oiW7FguNeHPShT5j1sHA0MdV1Gxvo0l-kQ3G9LqkaderTFWd3ZqmyXXjwSWATFnmLl_jcfpfSeCSXJow9ZnqyIhZmyOIaWACA4DAhPGth8Cxw76LuU",
    content: "能否展开讲讲 Diff 算法在处理大型列表时的具体优化策略？",
    time: "5 小时前",
    location: "伦敦",
    device: "Ubuntu",
    browser: "Firefox",
    replies: [
      {
        id: 21,
        authorName: "Rebel's Port",
        authorAvatar:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBkC0wxOscYvQM2ZDRddkft6kGBmRP7lU0Q1kuGjL8uyC0GL1Gcetm8h5TmaUtvPAaoiID_8MAmmocRpnCxb7vwM6v6bBS5w8UZRdisvA9FRDdRXqEkmvxDSOobUR6kfIy6K6PIw-6exK2cCz6-wQfmreQD2MAR5drrK8xwH6-ReD4yI4n3TAtKvKuSEz5XHzoLtqbNSa1HilxxjpD_Kv2uSvZHwpWgpVAhOxn51Ngv9QAG3CixkL_fv56k30WrHZZ66cvHKh0pMZ4",
        content:
          "回复 @Mike Wilson React 的 Diff 算法主要通过 key 进行优化。在大型列表中，它会先进行单节点 Diff，然后通过 map 查找复用节点，尽量减少 DOM 移动操作。",
        time: "4 小时前",
        location: "上海",
        device: "macOS",
        browser: "Chrome",
        isAuthor: true,
      },
    ],
  },
  {
    id: 3,
    authorName: "James L.",
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCHX-j_0M-QfOq2W2w0X6e_T7D-G4M2v8pU1qV3xW-8-L9yC6M5n0J5X2z1A9z8=s100-p-k-no-mo",
    content:
      "移动端的表现非常惊人。之前在 iPhone 15 上测试过几个复杂的瀑布流布局，在并发模式下完全没有掉帧。",
    time: "8 小时前",
    location: "深圳",
    device: "iPhone 15 Pro",
    browser: "Safari",
  },
  {
    id: 4,
    authorName: "Li Ming",
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkC0wxOscYvQM2ZDRddkft6kGBmRP7lU0Q1kuGjL8uyC0GL1Gcetm8h5TmaUtvPAaoiID_8MAmmocRpnCxb7vwM6v6bBS5w8UZRdisvA9FRDdRXqEkmvxDSOobUR6kfIy6K6PIw-6exK2cCz6-wQfmreQD2MAR5drrK8xwH6-ReD4yI4n3TAtKvKuSEz5XHzoLtqbNSa1HilxxjpD_Kv2uSvZHwpWgpVAhOxn51Ngv9QAG3CixkL_fv56k30WrHZZ66cvHKh0pMZ4",
    content:
      "Vue 和 React 在这方面的思路确实有很大差异，React 选了一条更具数学美感的路径。",
    time: "10 小时前",
    location: "上海",
    device: "Android 14 (Pixel 8)",
    browser: "Chrome Mobile",
  },
  {
    id: 5,
    authorName: "David Kim",
    authorAvatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUXw1YQAkJIiwJZMoVogw-UwgkL7WU_UpVBjgGWOrAslGEU4-oEqFnt47eK48IOPXhjWfWxCrSTN_lbs829w1z2lhfJb0YXjsUW_m7ShAB-1IlJWRN8rEAe9-wy0c-HCAuE7JpGItbvjG0diH3y118zWtI4oiW7FguNeHPShT5j1sHA0MdV1Gxvo0l-kQ3G9LqkaderTFWd3ZqmyXXjwSWATFnmLl_jcfpfSeCSXJow9ZnqyIhZmyOIaWACA4DAhPGth8Cxw76LuU",
    content: "博主的配图非常清晰，收藏了，面试复习必备！",
    time: "2023-10-23 18:45",
    location: "首尔",
    device: "MacBook Air",
    browser: "Arc Browser",
  },
];

const commentTotalCount = 32;
const remainingCommentCount = 22;

const tocItems: TocItem[] = [
  { id: "intro", title: "1. 为什么需要 Fiber？", level: 1 },
  { id: "nodes", title: "2. Fiber 节点：工作单元", level: 1 },
  { id: "diagram", title: "树结构可视化", level: 2 },
  { id: "reconciliation", title: "3. 并发模式的工作流程", level: 1 },
  { id: "diagram", title: "协调与 Diff 算法", level: 2 },
  { id: "reconciliation", title: "4. 总结与最佳实践", level: 1 },
];

const graphNodes: GraphNode[] = [
  { id: "node-1", label: "Virtual DOM", x: 33, y: 25, color: "#3b82f6" },
  { id: "node-2", label: "Reconciliation", x: 75, y: 66, color: "#6366f1" },
  { id: "node-3", label: "Hooks", x: 25, y: 66, color: "#10b981" },
];
const graphEdges: GraphEdge[] = [
  { from: "node-1", to: "node-2" },
  { from: "node-1", to: "node-3" },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 博客状态原始数据
  const [rawData, setRawData] = useState<blogDataSourceMeta>(); // 请求数据
  const [error, setError] = useState<String | null>(null); // 返回错误状态，可设计组件
  const [loading, setLoading] = useState<boolean>(true); // 加载状态

  useEffect(() => {
    if (!id) {
      setError("文章不存在");
      setLoading(false);
      navigate("/blog");
    }

    try {
      setRawData(blogDataSource);
    } catch {}
  }, [id]);

  // TODO: 接入hooks/API - 点赞
  const handleLike = () => {};

  // TODO: 接入hooks/API - 赞助
  const handleSponsor = () => {};

  // TODO: 接入hooks/API - 提交评论
  const handleSubmitComment = (data: CommentFormData) => {
    console.log("提交评论:", data);
  };

  // TODO: 接入hooks/API - 加载更多评论
  const handleLoadMoreComments = () => {};

  // TODO: 接入hooks/API - 图谱节点点击
  const handleGraphNodeClick = (nodeId: string) => {
    console.log("点击图谱节点:", nodeId);
  };

  return (
    <>
      <BlogHero post={rawData} />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 items-start">
          {/* 左侧主内容区 */}
          <div className="space-y-8">
            <BlogMarkdown sections={markdownSections} />
            <BlogNavigation
              prevPost={rawData?.prevPost}
              nextPost={rawData?.nextPost}
            />
            <InteractionBar
              data={interactionData}
              onLike={handleLike}
              onSponsor={handleSponsor}
            />
            <div id="comments-section">
              <CommentSection
                totalCount={commentTotalCount}
                comments={comments}
                currentUserAvatar={postMeta.coverImage}
                onSubmitComment={handleSubmitComment}
                onLoadMore={handleLoadMoreComments}
                remainingCount={remainingCommentCount}
              />
            </div>
          </div>

          {/* 右侧边栏 */}
          <aside className="space-y-6 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <RelationGraph
              nodes={graphNodes}
              edges={graphEdges}
              onNodeClick={handleGraphNodeClick}
            />
            <BlogToc items={tocItems} />
          </aside>
        </div>
      </main>

      <ScrollWidget />
    </>
  );
};

export default BlogDetail;
