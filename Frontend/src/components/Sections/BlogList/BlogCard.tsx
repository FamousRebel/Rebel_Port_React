import React from "react";
import { Card, CardDescription } from "@/components/Common/Card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Icons from "@/components/Common/Icons";
import type { BlogItem } from "@/types/blog.types";

interface BlogCardProps {
  item: BlogItem;
}

const BlogCard = ({ item }: BlogCardProps) => {
  const navigate = useNavigate();

  const formatNumber = (num: number): string => {
    if (num >= 10000) {
      return (num / 10000).toFixed(1) + "万";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <Card
      cursor="pointer"
      onClick={() => navigate(item.url || "/blogs")}
      className="mb-6 overflow-hidden"
    >
      <div className="flex gap-4 p-4">
        <div className="w-32 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
          <img
            src={item.cover}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex gap-2 items-center text-xs mb-2">
            <Badge variant="outline" className="text-[#666666]">
              {item?.tag}
            </Badge>
            <span className="text-[#666666]">{item?.date}</span>
          </div>
          <div className="text-xl font-bold line-clamp-2 overflow-hidden text-ellipsis mb-2">
            {item?.title}
          </div>
          <CardDescription className="line-clamp-2 overflow-hidden text-ellipsis mb-3">
            {item?.description}
          </CardDescription>
          <div className="flex flex-wrap gap-1 mb-3">
            {item.techStack.map((tech, index) => (
              <Badge
                key={index}
                className="text-xs"
                style={{
                  backgroundColor: tech.color + "20",
                  color: tech.color,
                }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>
          <div className="flex gap-4 text-xs text-[#999999]">
            <div className="flex items-center gap-0.5">
              <Icons name="fileText" size={15} />
              {item.wordCount}字
            </div>
            <span className="flex items-center gap-0.5">
              <Icons name="eyes" size={15} />
              {formatNumber(item.views)}
            </span>
            <span className="flex items-center gap-0.5">
              <Icons name="message" size={15} />
              {item.comments}
            </span>
            <span className="flex items-center gap-0.5">
              <Icons name="heart" size={15} />
              {item.star}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
