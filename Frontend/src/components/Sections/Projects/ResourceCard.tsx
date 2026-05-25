import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icons from "@/components/Common/Icons";
import Card from "@/components/Common/Card/Card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface LinksItem {
  type: "github" | "web";
  url: string;
}

export interface ResourceItem {
  id: number;
  icon?: string;
  color: string;
  title: string;
  subTitle: string;
  description: string;
  tag?: string;
  techStack?: string[];
  links?: LinksItem[] | string;
}

interface ResourceCardProps {
  type: "project" | "tool";
  title: string;
  subtitle?: string;
  tags?: { label: string; value: string }[];
  list: ResourceItem[];
}

const ResourceCard = ({
  type,
  title,
  subtitle,
  tags,
  list,
}: ResourceCardProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);
  const [activeTag, setActiveTag] = useState<string>("all");

  useEffect(() => {
    if (!api) return;

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  const filteredList =
    activeTag === "all" ? list : list.filter((item) => item.tag === activeTag);

  const handleItemClick = (links: string, type: string) => {
    if (!links) return;
    if (type === "project") return;
    if (typeof links === "string") {
      window.open(links, "_blank");
    }
  };

  const handleIcon = (icon: string) => {
    if (!icon) return;
    console.log(icon[0]);
    return icon[0];
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">{title}</h2>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
        <div className="flex items-center gap-4">
          {tags && tags.length > 0 && (
            <Select value={activeTag} onValueChange={setActiveTag}>
              <SelectTrigger className="w-32 bg-white">
                <SelectValue placeholder="选择类型" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectGroup>
                  {tags.map((tag) => (
                    <SelectItem key={tag.value} value={tag.value}>
                      {tag.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 cursor-pointer"
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
            >
              <Icons name="chevronLeft" size={12} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-8 h-8 cursor-pointer"
              onClick={() => api?.scrollNext()}
              disabled={!canScrollNext}
            >
              <Icons name="chevronRight" size={12} />
            </Button>
          </div>
        </div>
      </div>
      <Carousel
        className="max-w-full"
        setApi={setApi}
        opts={{ slidesToScroll: type === "project" ? 3 : 3, watchDrag: false }}
      >
        <CarouselContent className="mt-1">
          {filteredList?.map((item) => (
            <CarouselItem
              key={item?.id}
              className="basis-1/3"
              onClick={() => handleItemClick(item.links as string, type)}
            >
              <Card
                cursor={type === "tool" ? "pointer" : "default"}
                className="h-full bg-white"
              >
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                  >
                    <span className="text-xl font-bold text-white">
                      {handleIcon(item.title)}
                    </span>
                  </div>
                  <div className=" flex-1 flex flex-col">
                    <span className="text-base font-bold text-gray-900">
                      {item.title}
                    </span>
                    <span className="text-xs text-gray-500">
                      {item.subTitle}
                    </span>
                  </div>
                  {item.tag && (
                    <Badge
                      className="text-xs px-2 py-0.5"
                      variant="secondary"
                      style={
                        {
                          backgroundColor: `${item?.color}20`,
                          color: item?.color,
                        } as React.CSSProperties
                      }
                    >
                      {item?.tag}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                  {item.description}
                </p>
                {/* 技术栈 */}
                {type === "project" &&
                  item.techStack &&
                  item.techStack.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                {/* 项目链接 */}
                {type === "project" &&
                  item.links &&
                  Array.isArray(item.links) && (
                    <div className="flex items-center gap-4 pt-5 border-t border-gray-200">
                      <a
                        href={item.links[0].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm group/links transition-colors"
                      >
                        <Icons
                          name="Github"
                          size={18}
                          className="group-hover/links:scale-110"
                        />
                        <span className="group-hover/links:text-gray-700">
                          Github
                        </span>
                      </a>
                      {item.links.some((link) => link.type === "web") ? (
                        <a
                          href={
                            item.links.find((link) => link.type === "web")?.url
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm group/links transition-colors"
                        >
                          <Icons
                            name="eyes"
                            size={18}
                            className="group-hover/links:scale-110"
                          />
                          <span className="group-hover/links:text-gray-700">
                            访问
                          </span>
                        </a>
                      ) : (
                        <span className="flex items-center gap-1 text-sm text-gray-400 cursor-default">
                          <Icons
                            name="closeEyes"
                            size={18}
                            className="cursor-default hover:scale-none"
                          />
                          <span>暂无</span>
                        </span>
                      )}
                    </div>
                  )}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ResourceCard;
