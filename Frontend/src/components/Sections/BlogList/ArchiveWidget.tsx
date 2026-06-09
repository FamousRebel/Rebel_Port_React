import { Card, CardHorizontalLine } from "@/components/Common/Card";
import CardChevron from "@/components/Common/Card/CardChevron";
import Icons from "@/components/Common/Icons";
import React from "react";

interface CalendarDays {
  year: number;
  month: number;
  day: number;
  isCurrentMonth: boolean;
  hasArticle: boolean;
}

interface ArchiveWidgetProps {
  articleDates: string[];
  selectedDate: string | null;
  onDateClick: (date: string) => void;
}

const ArchiveWidget = ({
  articleDates,
  selectedDate,
  onDateClick,
}: ArchiveWidgetProps) => {
  const WEEKDAYS: string[] = ["周", "一", "二", "三", "四", "五", "六"]; // 生成一周标题
  const DATE: Date = new Date(); //创建当前时间
  const YEAR: number = DATE.getFullYear(); // 获取当前年
  const MONTH: number = DATE.getMonth() + 1; // 获取当前月

  const articleDatesSet = new Set(articleDates);

  // 获取当月天数
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };

  // 获取当月1号在周几
  const getFirstDayOfWeek = (year: number, month: number) => {
    return new Date(year, month - 1, 1).getDay();
  };

  // 处理字符串时间
  const formatDate = (y: number, m: number, d: number): string => {
    return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  };

  // 日历数据
  const buildCalendarDays = (year: number, month: number) => {
    // 处理当月
    const firstDayOfWeek = getFirstDayOfWeek(year, month);
    const daysInMonth = getDaysInMonth(year, month);

    // 处理上个月
    const prevYear = month === 0 ? year - 1 : year; // 特殊处理1月份的
    const prevMonth = month === 0 ? 11 : month - 1; // 1月份拿去年12分的
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

    const prevMonthDays = daysInPrevMonth - firstDayOfWeek + 1; // 从哪一天开始补
    const days: CalendarDays[] = [];

    // 补齐上个月的日期
    for (let i = prevMonthDays; i <= daysInPrevMonth; i++) {
      const dateStr = formatDate(prevYear, prevMonth, i);
      days.push({
        year: prevYear,
        month: prevMonth,
        day: i,
        isCurrentMonth: false,
        hasArticle: articleDatesSet.has(dateStr),
      });
    }

    // 生成当月日期
    for (let i = 1; i <= daysInMonth; i++) {
      const dateStr = formatDate(year, month, i);
      days.push({
        year,
        month,
        day: i,
        isCurrentMonth: true,
        hasArticle: articleDatesSet.has(dateStr),
      });
    }

    // 补齐下个月的日期
    const remaining = 35 - days.length;
    const nextYear = month === 0 ? year - 1 : year;
    const nextMonth = month === 0 ? 11 : month - 1;
    for (let i = 1; i <= remaining; i++) {
      days.push({
        year: nextYear,
        month: nextMonth,
        day: i,
        isCurrentMonth: false,
        hasArticle: false,
      });
    }

    return days;
  };

  // 日历标题
  const WeekDaysGrid = () => {
    return (
      <div className="w-full grid grid-cols-7 gap-1 text-[11px] mb-2 text-center cursor-default">
        {WEEKDAYS.map((item, index) => (
          <span
            key={item + index}
            className="size-8 text-slate-400 font-medium content-center"
          >
            {item}
          </span>
        ))}
      </div>
    );
  };

  // 日历
  const CalendarCells = () => {
    return (
      <div className="w-full grid grid-cols-7 gap-1 gap-y-1.5 text-center mb-5">
        {buildCalendarDays(YEAR, MONTH).map((item, idx) => {
          const dateStr = formatDate(item.year, item.month, item.day);
          const isActive = selectedDate === dateStr;
          return (
            <div
              key={`${item.year}-${item.month}-${item.day}-${idx}`}
              onClick={() => {
                if (item.hasArticle && item.isCurrentMonth) {
                  onDateClick(dateStr);
                }
              }}
              className={`relative size-8 content-center rounded-sm cursor-default
                ${!item.isCurrentMonth && "text-slate-300"}
                ${item.hasArticle && item.isCurrentMonth && !isActive && "hover:bg-blue-50 text-blue-400 cursor-pointer"}
                ${isActive && "bg-blue-500 text-white rounded-md cursor-pointer"}`}
            >
              {item.day}
              {item.hasArticle && !isActive && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-0.5 inline-block size-1 bg-blue-300 rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <Card>
      <div className="flex justify-between items-center cursor-pointer mb-6 group">
        <div className="flex items-center gap-2">
          <Icons
            name="calendarDays"
            size={22}
            className="group-hover:scale-110"
          />
          <h3 className="text-lg font-bold flex gap-2">归档</h3>
        </div>
        <CardChevron className="static" />
      </div>
      <WeekDaysGrid />
      <CalendarCells />
      <CardHorizontalLine />
      <div className="text-xs text-gray-400 text-center">
        {YEAR}年 {MONTH}月
      </div>
    </Card>
  );
};
export default ArchiveWidget;
