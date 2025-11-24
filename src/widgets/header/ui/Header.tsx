"use client";

import clsx from "clsx";
import { useSidebarStore } from "@/shared/store/useSidebarStore";
import { Bell, Search } from "lucide-react";
import DefaultTooltip from "@/shared/ui/tooltip/DefaultTooltip";

export default function Header() {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);

  return (
    <div
      className={clsx(
        "fixed right-0 flex justify-between items-center h-16 px-6 bg-white border-b border-b-gray-200 transition-default z-10",
        {
          "left-64": sidebarOpen,
          "left-[52px]": !sidebarOpen,
        }
      )}
    >
      <div className="flex-center size-9 rounded-lg hover:cursor-pointer hover:bg-hover-bg">
        <Search size={18} className="text-gray-700" />
      </div>
      <div className="flex gap-4">
        <div className="relative flex-center size-9 rounded-lg hover:cursor-pointer hover:bg-hover-bg">
          <Bell size={18} className="text-gray-700" />
          <div className="absolute top-1 right-1 size-1.5 bg-primary rounded-full" />
        </div>
        <div className="flex gap-2">
          <div className="size-9 bg-hover-bg border-2 border-primary rounded-full"></div>
          <div>
            <div className="text-gray-700 text-sm font-bold">공도</div>
            <div className="text-gray-500 text-xs">Free Plan</div>
          </div>
        </div>
      </div>
    </div>
  );
}
