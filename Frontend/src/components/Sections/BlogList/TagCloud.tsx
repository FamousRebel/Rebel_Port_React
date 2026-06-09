import React from "react";
import { Card } from "@/components/Common/Card";
import CardChevron from "@/components/Common/Card/CardChevron";
import { Badge } from "@/components/ui/badge";
import Icons from "@/components/Common/Icons";

interface TagItem {
  label: string;
  color: string;
}

const TagCloud = () => {
  const tags: TagItem[] = [
    { label: "React", color: "#3b82f6" },
    { label: "Vue 3", color: "#22c55e" },
    { label: "TypeScript", color: "#6366f1" },
    { label: "Node.js", color: "#22c55e" },
    { label: "Tailwind CSS", color: "#0ea5e9" },
    { label: "Next.js", color: "#3b82f6" },
    { label: "Obsidian", color: "#8b5cf6" },
    { label: "Project Management", color: "#f97316" },
    { label: "UI/UX Design", color: "#ec4899" },
    { label: "Git", color: "#6b7280" },
    { label: "Docker", color: "#06b6d4" },
    { label: "Python", color: "#eab308" },
    { label: "Go", color: "#14b8a6" },
    { label: "Rust", color: "#ef4444" },
    { label: "WebAssembly", color: "#f59e0b" },
    { label: "SWR", color: "#84cc16" },
    { label: "Zustand", color: "#22c55e" },
    { label: "Pinia", color: "#d946ef" },
    { label: "Vite", color: "#8b5cf6" },
    { label: "Express", color: "#e11d48" },
    { label: "MySQL", color: "#3b82f6" },
    { label: "Redis", color: "#ef4444" },
    { label: "JWT", color: "#f97316" },
    { label: "RESTful API", color: "#14b8a6" },
  ];

  return (
    <Card>
      <div className="flex items-center justify-between mb-6 cursor-pointer">
        <div className="flex items-center gap-2">
          <Icons name="tags" size={22} />
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
            标签
          </h3>
        </div>
        <CardChevron className="static" />
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag.label}
            variant="secondary"
            className="cursor-pointer hover:opacity-80 transition-opacity"
            style={{
              backgroundColor: `${tag.color}15`,
              color: tag.color,
              borderColor: `${tag.color}30`,
            }}
          >
            {tag.label}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default TagCloud;
