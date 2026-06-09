import { useMemo, useState, useCallback } from "react";
import type { BlogItem } from "@/types/blog.types";
import type { RefObject } from "react";

interface BlogFilterState {
  selectedTag: string | null;
  selectedCategory: string | null;
  selectedDate: string | null;
}

interface UseBlogFilterReturn {
  filters: BlogFilterState;
  filteredList: BlogItem[];
  setTag: (tag: string | null) => void;
  setCategory: (category: string | null) => void;
  setDate: (date: string | null) => void;
  clearFilters: () => void;
}

const useBlogFilter = (
  blogList: BlogItem[],
  firstCardRef: RefObject<HTMLDivElement | null>
): UseBlogFilterReturn => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const scrollToFirst = useCallback(() => {
    requestAnimationFrame(() => {
      firstCardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  const setTag = useCallback((tag: string | null) => {
    setSelectedTag((prev) => (prev === tag ? null : tag));
    scrollToFirst();
  }, [scrollToFirst]);

  const setCategory = useCallback((category: string | null) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
    scrollToFirst();
  }, [scrollToFirst]);

  const setDate = useCallback((date: string | null) => {
    setSelectedDate((prev) => (prev === date ? null : date));
    scrollToFirst();
  }, [scrollToFirst]);

  const clearFilters = useCallback(() => {
    setSelectedTag(null);
    setSelectedCategory(null);
    setSelectedDate(null);
  }, []);

  const filteredList = useMemo(() => {
    return blogList.filter((item) => {
      if (selectedTag && !item.techStack.some((t) => t.name === selectedTag)) {
        return false;
      }
      if (selectedCategory && item.tag !== selectedCategory) {
        return false;
      }
      if (selectedDate && item.date !== selectedDate) {
        return false;
      }
      return true;
    });
  }, [blogList, selectedTag, selectedCategory, selectedDate]);

  return {
    filters: { selectedTag, selectedCategory, selectedDate },
    filteredList,
    setTag,
    setCategory,
    setDate,
    clearFilters,
  };
};

export default useBlogFilter;