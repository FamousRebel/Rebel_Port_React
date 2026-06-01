import React from "react";
import { Card } from "@/components/Common/Card";
import { Badge } from "@/components/ui/badge";
import Icons from "@/components/Common/Icons";

const TagCloud = () => {
  const tags = [
    "React",
    "Vue",
    "TypeScript",
    "Node.js",
    "Go",
    "Rust",
    "WebAssembly",
    "CI/CD",
    "性能优化",
    "架构设计",
  ];

  return (
    <Card>
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Icons name="tags" size={25} />
        热门标签
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="secondary"
            className="cursor-pointer hover:bg-blue-100"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default TagCloud;
