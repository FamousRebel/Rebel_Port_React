import { Avatar, AvatarImage } from "@/components/ui/avatar";
import BusinessCardImg from "@/assets/1.png";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card, CardGroup, CardItem } from "@/components/Common/Card";
import { Car } from "lucide-react";

const BusinessCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-[calc(100vh-64px)] border border-gray-300 rounded-md bg-dot-pattern">
        <div className="flex flex-col items-center justify-center mx-auto w-full max-w-7xl h-full">
          <Avatar className="w-24 h-24 border-5 border-white shadow-[0_15px_25px_-2px_rgba(0,0,0,0.3)] mb-6">
            <AvatarImage src={BusinessCardImg} />
          </Avatar>
          <div className="text-6xl font-bold mb-4">Rebel's Port</div>
          <div className="flex flex-col text-xl justify-center items-center mb-8">
            <span>所谓“奇迹”，本质上是长期持续努力后的水到渠成‌</span>
            <span>网站正在"摆烂"式更新中...</span>
          </div>
          <div className="flex gap-2 mb-12">
            <Badge className="text-sm px-4 py-3 bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              React
            </Badge>
            <Badge className="text-sm px-4 py-3 bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
              Node.js
            </Badge>
          </div>
          <CardGroup align="center">
            <CardItem>
              <span className="text-3xl font-bold">24</span>
              <span className="text-[#666666] text-xs">项目</span>
              <span className="text-[10px] text-[#3B82F6]">2天前更新</span>
            </CardItem>
            <CardItem>
              <span className="text-3xl font-bold">82</span>
              <span className="text-[#666666] text-xs">文章</span>
              <span className="text-[10px] text-[#10B981]">昨天更新</span>
            </CardItem>
            <CardItem>
              <span className="text-3xl font-bold">114541</span>
              <span className="text-[#666666] text-xs">浏览数</span>
              <span className="text-[10px] text-[#A855F7]">2天前更新</span>
            </CardItem>
          </CardGroup>
          <div className="flex gap-4 mt-12">
            <Button
              className="px-6 py-2.5 w-32 h-11"
              onClick={() => navigate("/projects")}
            >
              查看全部项目
            </Button>
            <Button
              variant="outline"
              className="px-6 py-2.5 w-32 h-11"
              onClick={() => navigate("/blogs")}
            >
              阅读全部文章
            </Button>
            <Button
              variant="secondary"
              className="px-6 py-2.5 w-23 h-11
              bg-[#EFF6FF] text-[#2563EB]"
              onClick={() => navigate("/about")}
            >
              联系我
            </Button>
            <Button
              variant="secondary"
              className="px-6 py-2.5 w-26.5 h-11 border border-[#E5E7EB]"
              onClick={() => navigate("/about")}
            >
              查看简历
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BusinessCard;
