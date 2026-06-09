import React from "react";
import { Card } from "@/components/Common/Card";
import CardChevron from "@/components/Common/Card/CardChevron";
import { Badge } from "@/components/ui/badge";
import Icons from "@/components/Common/Icons";

export interface TagItem {
  label: string;
  color: string;
}

interface TagCloudProps {
  tags: TagItem[];
  selectedTag: string | null;
  onTagClick: (tag: string) => void;
}

const TagCloud = ({ tags, selectedTag, onTagClick }: TagCloudProps) => {
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
        {tags.map((tag) => {
          const isActive = selectedTag === tag.label;
          return (
            <Badge
              key={tag.label}
              variant="secondary"
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onTagClick(tag.label)}
              style={{
                backgroundColor: isActive ? `${tag.color}30` : `${tag.color}15`,
                color: tag.color,
                borderColor: isActive ? tag.color : `${tag.color}30`,
                boxShadow: isActive ? `0 0 0 1px ${tag.color}` : undefined,
              }}
            >
              {tag.label}
            </Badge>
          );
        })}
      </div>
    </Card>
  );
};

export default TagCloud;
