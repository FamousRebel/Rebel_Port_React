import React from "react";

// ============================================================
// 类型定义（待从公共 types 迁移）
// ============================================================
export interface MarkdownSection {
  id: string; // 锚点ID
  title?: string; // 段落标题（可选）
  content: string; // HTML 正文内容
  type: "paragraph" | "quote" | "code" | "diagram" | "callout";
  codeLanguage?: string; // 代码语言（type=code时）
  diagramAlt?: string; // 图表备用文字（type=diagram时）
}

// TODO: MarkdownSection 类型等待从公共 types 迁移

interface BlogMarkdownProps {
  /** 文章正文段落列表 */
  sections: MarkdownSection[];
}

const BlogMarkdown: React.FC<BlogMarkdownProps> = ({ sections }) => {
  const renderSection = (section: MarkdownSection) => {
    switch (section.type) {
      case "quote":
        return (
          <p className="text-xl leading-relaxed text-slate-700 mb-6 border-l-4 border-[#13a4ec] pl-6 py-2 bg-blue-50/30">
            {section.content}
          </p>
        );

      case "callout":
        return (
          <div className="bg-blue-50/50 border-l-4 border-[#13a4ec] p-6 rounded-r-lg my-8">
            <p className="text-[#13a4ec] font-semibold italic m-0">
              {section.content}
            </p>
          </div>
        );

      case "code":
        return (
          <div className="bg-slate-900 rounded-xl p-6 overflow-x-auto my-8 shadow-xl relative group">
            <div className="absolute right-4 top-4 text-slate-500 text-xs font-mono uppercase tracking-widest pointer-events-none">
              {section.codeLanguage || "text"}
            </div>
            <pre className="text-blue-300 text-sm leading-relaxed">
              <code>{section.content}</code>
            </pre>
          </div>
        );

      case "diagram":
        return (
          <div className="aspect-video bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="w-16 h-16 bg-gray-200 rounded mb-4" />
            <p className="font-bold text-lg text-slate-700">
              {section.title || "图示"}
            </p>
            <p className="text-sm">{section.diagramAlt || section.content}</p>
            <div className="mt-4 flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 border border-blue-200" />
              <div className="w-12 h-12 rounded-lg bg-emerald-100 border border-emerald-200" />
              <div className="w-12 h-12 rounded-lg bg-amber-100 border border-amber-200" />
            </div>
          </div>
        );

      case "paragraph":
      default:
        return (
          <div>
            {section.title && (
              <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b pb-2 border-slate-100">
                {section.title}
              </h2>
            )}
            <p
              className="mb-6 text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          </div>
        );
    }
  };

  return (
    <article className="prose prose-slate max-w-[820px] mx-auto lg:mx-0 bg-white p-8 md:p-12 rounded-[1.5rem] shadow-sm border border-slate-100">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-12 last:mb-4">
          {renderSection(section)}
        </section>
      ))}
    </article>
  );
};

export default BlogMarkdown;
