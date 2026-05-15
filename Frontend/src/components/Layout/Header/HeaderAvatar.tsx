import Icons from "@/components/Common/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

const HeaderAvatar = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Avatar size="lg">
          <AvatarImage src="https://github.com/FamousRebel.png" />
          <AvatarFallback>
            <Icons name="User" size={24} />
          </AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="size-100 flex flex-col justify-center items-center">
          <div className="grid grid-rows-2 place-items-center">
            <Avatar className="size-30">
              <AvatarImage src="https://github.com/FamousRebel.png" />
              <AvatarFallback>
                <Icons name="User" size={50} />
              </AvatarFallback>
            </Avatar>
            <Button className="[&_svg:not([class*='size-'])]:size-6">
              <Icons name="Github" color="#FFf" />
              使用Github登录
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderAvatar;
