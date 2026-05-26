import React, { useEffect, useState } from "react";
import Icons from "@/components/Common/Icons";
import type { IconName } from "@/components/Common/Icons/icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import type { CardItem } from "@/types/cardItemTypes";
import { useNavigate } from "react-router-dom";

interface featuredSectionProps<T extends CardItem> {
  type: "Projects" | "Blog"; // 区块类型
  title: string; // 区块标题
  sectionIcon?: string; // 区块图标名称
  list: T[]; // 区块列表
  renderItem?: (item: T) => React.ReactNode; // 卡片渲染函数
}

const FeaturedSection = <T extends CardItem>({
  type,
  title,
  sectionIcon,
  list,
  renderItem,
}: featuredSectionProps<T>) => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState<boolean>(false);
  const [canScrollNext, setCanScrollNext] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!api) return;

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    // 监听滚动事件
    api.on("select", () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    });
  }, [api]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-2 items-center">
          {sectionIcon ? (
            <Icons name={sectionIcon as IconName} size={18} />
          ) : null}
          <span className="text-2xl font-bold">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="link"
            className="cursor-pointer text-sm text-[#666666]"
            onClick={() => navigate(`/${type}`)}
          >
            查看全部
            <Icons name="ArrowRight" size={12} />
          </Button>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 cursor-pointer"
              onClick={() => api?.scrollPrev()}
              disabled={!canScrollPrev}
            >
              <Icons name="chevronLeft" size={12} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10 cursor-pointer"
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
        opts={{ slidesToScroll: 2, watchDrag: false }}
      >
        <CarouselContent className="mt-1">
          {list?.map((item) => (
            <CarouselItem
              key={item?.id}
              className="basis-1/4"
              onClick={() => window.open(item?.url || "", "_blank")}
            >
              {renderItem?.(item)}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
export default FeaturedSection;
