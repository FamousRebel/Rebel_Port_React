import React from "react";
import { Card } from "@/components/Common/Card";
import { Button } from "@/components/ui/button";
import Icons from "@/components/Common/Icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import BusinessCardImg from "@/assets/1.png";

const AuthorInfo = () => {
  return (
    <Card>
      <div className="flex flex-col items-center text-center">
        <Avatar className="w-20 h-20 border-4 border-white shadow-md mb-4">
          <AvatarImage src={BusinessCardImg} />
        </Avatar>
        <h3 className="text-xl font-bold mb-2">Rebel</h3>
        <p className="text-gray-600 text-sm mb-4">
          全栈开发者，热爱分享技术与生活
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="rounded-full">
            <Icons name="Github" size={16} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Icons name="twitter" size={16} />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Icons name="rss" size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default AuthorInfo;
