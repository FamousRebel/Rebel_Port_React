import { Avatar, AvatarImage } from "@/components/ui/avatar";
import BusinessCardImg from "@/assets/1.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardGroup, CardItem } from "@/components/Common/Card";
import { Car } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Heatmap from "@/components/ui/heatmap";
import Icons from "@/components/Common/Icons";
import CountUp from "@/components/Common/CountUp";
import { useState } from "react";

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

    data.push({ date: dateStr, value });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
};

const sampleData = generateHeatmapData();

const BusinessCard = () => {
  const [nums, setNums] = useState(2);
  return (
    <div className="h-[calc(100vh-64px)] border border-gray-300 rounded-md bg-dot-pattern">
      <div className="flex flex-col items-center justify-center mx-auto w-full max-w-7xl h-full">
        <div className="text-5xl font-bold">项目作品集</div>
        <div>
          展示了我最近参与度前端架构、开源工具及技术实践中的探索与沉淀。保持对技术的热爱，持续交付高质量的代码作品
        </div>
        <Card className="w-full max-w-255.5 flex flex-col items-center gap-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col items-start gap-2">
              <div className="text-3xl font-bold">
                <Icons name="heatMap" size={18} />
                Github活动贡献
              </div>
              <div className="text-sm text-[#64748B]">
                过去一年中在社区的活跃程度
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <CountUp to={nums} separator="," className="text-5xl font-bold" />
              <div className="text-sm text-[#64748B]">过去一年总贡献</div>
            </div>
          </div>
          <div className="w-[calc(100%-64px)]">
            <Carousel className="w-full " opts={{ watchDrag: false }}>
              <CarouselContent className="mt-2">
                <CarouselItem>
                  <Heatmap
                    colorMode="interpolate"
                    data={sampleData}
                    startDate={new Date("2026-1-1")}
                    endDate={new Date("2026-12-31")}
                    cellSize={13}
                    gap={2}
                    displayStyle="squares"
                  />
                </CarouselItem>
                <CarouselItem>
                  <Heatmap
                    colorMode="interpolate"
                    data={sampleData}
                    startDate={new Date("2026-1-1")}
                    endDate={new Date("2026-12-31")}
                    cellSize={12.5}
                    displayStyle="squares"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </Card>
      </div>
    </div>
  );
};
export default BusinessCard;
