import { Card, CardGroup, CardItem } from "@/components/Common/Card";
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
import { useMemo, useState } from "react";

let ContributionValue = 0;

const generateHeatmapData = () => {
  const data = [];
  const startDate = new Date("2026-01-01");
  const endDate = new Date("2026-12-31");

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
    ContributionValue += value;
    data.push({ date: dateStr, value });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

const sampleData = generateHeatmapData();

const ContributionChart = () => {
  const [nums, setNums] = useState(2);
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="h-[calc(100vh-64px)] border border-gray-300 rounded-md bg-dot-pattern flex justify-center">
      <div className="flex flex-col items-center justify-center mx-auto w-full max-w-7xl gap-6">
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
                {Array.from({ length: 2 }).map((item, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <Heatmap
                      colorMode="interpolate"
                      data={sampleData}
                      startDate={new Date("2026-1-1")}
                      endDate={new Date("2026-12-31")}
                      cellSize={12}
                      displayStyle="squares"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-8" />
              <CarouselNext className="-right-8" />
            </Carousel>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default ContributionChart;
