import React from "react";
import { Card } from "@/components/Common/Card";
import { Badge } from "@/components/ui/badge";
import Icons from "@/components/Common/Icons";

const CategoryFilter = () => {
  const categories = [
    { label: "前端前沿", count: 24 },
    { label: "工程效能", count: 18 },
    { label: "技术趋势", count: 12 },
    { label: "性能优化", count: 15 },
  ];

  return (
    <Card>
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Icons name="folder" size={16} />
        文章分类
      </h3>
      <div className="space-y-2">
        {categories.map((cat) => (
          <button
            key={cat.label}
            className="w-full flex justify-between items-center text-sm hover:text-blue-600 transition-colors"
          >
            <span>{cat.label}</span>
            <Badge variant="secondary">{cat.count}</Badge>
          </button>
        ))}
      </div>
    </Card>
  );
};

export default CategoryFilter;
