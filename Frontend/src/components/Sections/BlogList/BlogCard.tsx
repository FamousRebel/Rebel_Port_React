import React from "react";
import { Card, CardDescription } from "@/components/Common/Card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import Icons from "@/components/Common/Icons";
import type { BlogItem } from "@/types/blog.types";
import CardChevron from "@/components/Common/Card/CardChevron";

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
      onClick={() => navigate(`/blog/${item.blogId}`)}
      className="mb-6"
    >
      <div className="flex gap-4">
        <div className="shrink-0 w-68 h-45 overflow-hidden rounded-lg bg-muted">
          <img
            src={item.cover}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-4 text-xs text-[#666666]">
            <span
              className="flex gap-0.5 hover:text-black"
              onClick={(e) => {
                e.stopPropagation();
                console.log("calendar");
              }}
            >
              <Icons name="calendar" size={14} />
              {item?.date}
            </span>
            <span
              className="flex gap-0.5 hover:text-black"
              onClick={(e) => {
                e.stopPropagation();
                console.log("folderOpen");
              }}
            >
              <Icons name="folderOpen" size={14} />
              {item?.tag}
            </span>
          </div>
          <div className="text-xl font-bold line-clamp-2 overflow-hidden text-ellipsis group-hover:text-[#13a4ec]">
            {item?.title}
          </div>
          <div className="flex flex-wrap gap-2">
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
          <CardDescription className="flex-1 not-last:overflow-hidden line-clamp-3 text-ellipsis mt-0">
            {item?.description}
          </CardDescription>
          <div className="flex gap-4 text-xs text-[#999999]">
            <span className="flex gap-0.5">
              <Icons name="fileText" size={15} />
              {item.wordCount} 字
            </span>
            <span className="flex gap-0.5">
              <Icons name="eyes" size={15} />
              {formatNumber(item.views)}
            </span>
            <span className="flex gap-0.5">
              <Icons name="message" size={15} />
              {item.message}
            </span>
            <span className="flex gap-0.5">
              <Icons name="heart" size={15} />
              <span>{item.star}</span>
            </span>
          </div>
        </div>
      </div>
      <CardChevron />
    </Card>
  );
};

export default BlogCard;
