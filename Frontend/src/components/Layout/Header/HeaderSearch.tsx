import Icons from "@/components/Common/Icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { SearchTabs, SearchItem } from "@/types/search.types";
import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import useSearchStore from "@/store/searchStore";
import { useShallow } from "zustand/react/shallow";

interface HeaderSearchProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  tabs: SearchTabs[];
  value?: SearchItem[];
}

const HeaderSearch = (props: HeaderSearchProps) => {
  const { open, onOpenChange, tabs, value } = props;
  const { setSelectedType } = useSearchStore(useShallow((state) => state));
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const loadMoreRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!open || !value?.length) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < value.length - 1 ? prev + 1 : prev,
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          e.preventDefault();
          if (value[selectedIndex]) {
            window.location.href = value[selectedIndex].url;
            onOpenChange?.(false);
          }
          break;
        case "Escape":
          e.preventDefault();
          onOpenChange?.(false);
          break;
      }
    },
    [open, value, selectedIndex, onOpenChange],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    const selectedItem = itemRefs.current[selectedIndex];
    if (selectedItem && listRef.current) {
      const listRect = listRef.current.getBoundingClientRect();
      const itemRect = selectedItem.getBoundingClientRect();

      if (itemRect.top < listRect.top) {
        selectedItem.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (itemRect.bottom > listRect.bottom) {
        selectedItem.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [selectedIndex]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [value]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        console.log("到底了，加载更多数据！");
        // 这里调用接口加载下一页
      }
    });

    if (loadMoreRef.current) observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [selectedIndex]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <InputGroup className="bg-[#eff6ff] w-40">
          <InputGroupInput
            placeholder="搜索"
            className="text-[#015aeb] placeholder:text-[#015aeb]"
          />
          <InputGroupAddon>
            <Icons name="Search" size={24} color="#015aeb" />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd className="bg-white">Ctrl + K</Kbd>
          </InputGroupAddon>
        </InputGroup>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="translate-y-0 top-5 sm:max-w-2xl"
      >
        <DialogHeader>
          <DialogTitle>
            <InputGroup className="bg-[#eff6ff]">
              <InputGroupInput
                placeholder="搜索"
                className="placeholder:text-[#015aeb]"
              />
              <InputGroupAddon>
                <Icons name="Search" size={24} color="#015aeb" />
              </InputGroupAddon>
              <InputGroupAddon align="inline-end">
                <Kbd className="bg-white">ESC</Kbd>
              </InputGroupAddon>
            </InputGroup>
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-start gap-3 border-b border-[#e5e5e5] pb-4">
          <span>全部结果:</span>
          <ToggleGroup
            type="single"
            defaultValue="all"
            size="sm"
            variant="outline"
            spacing={2}
            onValueChange={(value) => {
              setSelectedType(value);
            }}
          >
            {tabs?.map((tab: SearchTabs) => (
              <ToggleGroupItem
                key={tab.id}
                value={tab.type}
                className="data-[state=on]:bg-[#e5eff4] data-[state=on]:text-[#0c6a96] rounded-full border-blue-300"
              >
                {tab.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
        <div
          ref={listRef}
          className="overflow-y-auto no-scrollbar max-h-[calc(6*75px)]"
        >
          <ItemGroup>
            {value?.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
              >
                <Item
                  key={item.title}
                  variant="outline"
                  asChild
                  role="listitem"
                  className={`cursor-pointer transition-colors duration-150 ${
                    selectedIndex === index
                      ? "bg-blue-50 border-blue-300"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => {
                    window.location.href = item.url;
                    onOpenChange?.(false);
                  }}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <a href="#" className="w-full">
                    <ItemMedia variant="image">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </ItemMedia>
                    <ItemContent>
                      <ItemTitle className="line-clamp-1">
                        {item.title}
                      </ItemTitle>
                      <ItemDescription>{item.description}</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                      <Icons name="ArrowRight" size={16} />
                    </ItemActions>
                  </a>
                </Item>
              </div>
            ))}
          </ItemGroup>
          <div ref={loadMoreRef}>加载更多数据</div>
          {value?.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-gray-500">
              <Icons name="Search" size={48} />
              <p className="mt-4">未找到相关结果</p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-[auto_auto_auto_1fr] gap-5 text-xs">
          <div className="flex justify-center items-center gap-2">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            <span>选择结果</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Kbd>Enter</Kbd>
            <span>查看详情</span>
          </div>
          <div className="flex justify-center items-center gap-2">
            <Kbd>ESC</Kbd>
            <span>关闭</span>
          </div>
          <div className="flex justify-end items-center gap-2 ">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span>数据已同步至云端</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HeaderSearch;
