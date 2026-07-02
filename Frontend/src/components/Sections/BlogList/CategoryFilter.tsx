import React from "react";
import { Card } from "@/components/Common/Card";
import CardChevron from "@/components/Common/Card/CardChevron";
import { Badge } from "@/components/Common/badge";
import Icons from "@/components/Common/Icons";

export interface CategoryItem {
  label: string;
  count: number;
}

interface CategoryFilterProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onCategoryClick: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onCategoryClick,
}: CategoryFilterProps) => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-6 cursor-pointer">
        <div className="flex items-center gap-2">
          <Icons name="folderOpen" size={22} />
          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
            分类
          </h3>
        </div>
        <CardChevron className="static" />
      </div>
      <ul className="space-y-4">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.label;
          return (
            <li
              key={cat.label}
              onClick={() => onCategoryClick(cat.label)}
              className="flex justify-between items-center group/item cursor-pointer"
            >
              <span
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-blue-500 font-semibold"
                    : "text-slate-600 dark:text-slate-400 group-hover/item:text-blue-500"
                }`}
              >
                {cat.label}
              </span>
              <Badge
                variant="secondary"
                className={`transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "group-hover/item:bg-blue-500 group-hover/item:text-white"
                }`}
              >
                {cat.count}
              </Badge>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default CategoryFilter;
