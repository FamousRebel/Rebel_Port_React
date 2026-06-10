import React from "react";
import { Card } from "@/components/Common/Card";
import { Button } from "@/components/ui/button";
import Icons from "@/components/Common/Icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import BusinessCardImg from "@/assets/1.png";
import { Badge } from "@/components/ui/badge";
import { formatDate, formatNumber } from "@/utils/formatUtils";

interface links {
  name: string;
  url: string;
}

export interface myInfo {
  url: string;
  name: string;
  description: string;
  links: links[];
  articles: number;
  wordCount: number;
  visitor: number;
  views: number;
  lastUpdated: string;
}

interface infoDataProps {
  data: myInfo;
}

const AuthorInfo = ({ data }: infoDataProps) => {
  return (
    <Card className="p-8">
      <div className="flex flex-col items-center text-center max-w-80.25">
        <Avatar className="w-20 h-20 border-4 border-white shadow-md mb-4">
          <AvatarImage src={data.url} />
        </Avatar>
        <h3 className="text-xl font-bold mb-2">{data.name}</h3>
        <p className="text-gray-600 text-sm mb-7.5">{data.description}</p>
        <div className="flex gap-6 mb-10">
          <div>
            <Icons name="Github" size={22} />
          </div>
          <div>
            <Icons name="email" size={22} />
          </div>
          <div>
            <Icons name="rss" size={22} />
          </div>
        </div>
        <div className="grid grid-cols-2 w-full gap-6 mb-7.5">
          <div className="grid text-sm text-gray-400">
            <span className="text-2xl font-black text-black">
              {formatNumber(data.articles)}
            </span>
            文章
          </div>
          <div className="grid text-sm text-gray-400">
            <span className="text-2xl font-black text-black">
              {formatNumber(data.wordCount)}
            </span>
            总字数
          </div>
          <div className="grid text-sm text-gray-400">
            <span className="text-2xl font-black text-black">
              {formatNumber(data.visitor)}
            </span>
            访客
          </div>
          <div className="grid text-sm text-gray-400">
            <span className="text-2xl font-black text-black">
              {formatNumber(data.views)}
            </span>
            浏览量
          </div>
        </div>
        <div className="flex gap-2 items-center mt-10">
          <span className={"inline-block size-2 rounded-full bg-green-400"} />
          <span className="text-sm font-light text-gray-400">
            最后更新于: {formatDate(data.lastUpdated)}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default AuthorInfo;
