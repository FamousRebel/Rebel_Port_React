import { Card } from "@/components/Common/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Heatmap from "@/components/ui/heatmap";
import Icons from "@/components/Common/Icons";
import CountUp from "@/components/Common/CountUp";
import { useCallback, useEffect, useMemo, useState } from "react";

const HEATMAP_COLORS = [
  [
    // github
    "#ebedf0", // 0级 - 无活动（浅灰）
    "#9be9a8", // 1级 - 低活跃
    "#40c463", // 2级 - 中活跃
    "#216e39", // 3级 - 高活跃
    "#114b1d", // 4级 - 极高活跃
  ],
  [
    // gitee
    "#ebedf0", // 0级 - 无活动
    "#d1e8ff", // 1级
    "#79b9f7", // 2级
    "#4285f4", // 3级
    "#1a52c9", // 4级
  ],
];

const ContributionChart = () => {
  const [api, setApi] = useState<CarouselApi>(); // 获取轮播api
  const [selectedScrollSnap, setSelectedScrollSnap] = useState(0);
  const [pageNum, setPageNum] = useState(0);

  const handleSelect = useCallback(() => {
    if (api) {
      setSelectedScrollSnap(api.selectedScrollSnap());
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setSelectedScrollSnap(api.selectedScrollSnap());
    setPageNum(api.scrollSnapList().length);
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  // 缓存假数据，后期删除
  const sampleData = useMemo(() => {
    const data = [];
    const startDate = new Date("2026-01-01");
    const endDate = new Date("2026-12-31");
    let totalValue = 0;

    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split("T")[0];
      const dayOfWeek = currentDate.getDay();

      let value: number;
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        value = Math.floor(Math.random() * 8) + 1;
      } else {
        value = Math.floor(Math.random() * 15) + 3;
      }

      if (Math.random() < 0.1) {
        value = 0;
      }
      totalValue += value;
      data.push({ date: dateStr, value });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return { data, totalValue };
  }, []);

  const ContributionValue = sampleData.totalValue;
  const data = sampleData.data;

  return (
    <div className="h-[calc(100vh-64px)] border border-gray-300 rounded-md flex flex-col justify-center items-center">
      <div className="flex flex-col flex-1 items-center justify-center mx-auto w-full max-w-7xl gap-6">
        <div className="text-5xl font-bold">项目作品集</div>
        <div className="line-clamp-2 max-w-155.5 text-center text-lg mb-26">
          展示了我最近参与度前端架构、开源工具及技术实践中的探索与沉淀。保持对技术的热爱，持续交付高质量的代码作品
        </div>
        <Card className="w-full max-w-255.5 flex flex-col items-center gap-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col items-start gap-2">
              <div className="text-3xl font-bold gap-1 flex items-center">
                <Icons name="heatMap" size={18} />
                Github活动贡献
              </div>
              <div className="text-sm text-[#64748B]">
                过去一年中在社区的活跃程度
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <CountUp
                to={ContributionValue}
                separator=","
                className="text-5xl font-bold"
              />
              <div className="text-sm text-[#64748B]">过去一年总贡献</div>
            </div>
          </div>

          <div className="w-[calc(100%-64px)]">
            <Carousel opts={{ watchDrag: false }} setApi={setApi}>
              <CarouselContent className="mt-2">
                <CarouselItem className="flex justify-center">
                  <Heatmap
                    colorMode="discrete"
                    colorScale={HEATMAP_COLORS[0]}
                    data={data}
                    startDate={new Date("2026-1-1")}
                    endDate={new Date("2026-12-31")}
                    cellSize={12}
                  />
                </CarouselItem>
                <CarouselItem className="flex justify-center">
                  <Heatmap
                    colorMode="discrete"
                    colorScale={HEATMAP_COLORS[1]}
                    data={data}
                    startDate={new Date("2026-1-1")}
                    endDate={new Date("2026-12-31")}
                    cellSize={12}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="top-15 -left-8 translate-y-0" />
              <CarouselNext className="top-15 -right-8 translate-y-0" />
              <div className="flex justify-end items-center w-full mt-5">
                <div className="flex items-center gap-2 text-xs">
                  <span>少</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span
                        key={i}
                        className="inline-block size-3 transition-colors"
                        style={{
                          backgroundColor:
                            HEATMAP_COLORS[selectedScrollSnap][i],
                          borderRadius: 4,
                        }}
                      />
                    ))}
                  </div>
                  <span>多</span>
                </div>
              </div>
            </Carousel>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: pageNum }, (_, index) => (
              <span
                key={index}
                className="inline-block size-2 rounded-full"
                style={{
                  backgroundColor:
                    selectedScrollSnap === index ? "#13A4EC" : "#E2E8F0",
                }}
              />
            ))}
          </div>
        </Card>
      </div>

      <button
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
        className="relative bottom-5 cursor-pointer hover:scale-110 transition-transform"
      >
        <Icons name="arrowDown" size={40} animated animationType="slide-down" />
      </button>
    </div>
  );
};
export default ContributionChart;
