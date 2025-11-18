"use client";

import clsx from "clsx";
import { useSidebarStore } from "@/shared/store/useSidebarStore";
import { Bell, PanelLeftOpen } from "lucide-react";
import DefaultTooltip from "@/shared/ui/tooltip/DefaultTooltip";

export default function Header() {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);
  const toggleSidebar = useSidebarStore((s) => s.toggleSidebar);

  return (
    <div
      className={clsx(
        "fixed right-0 flex justify-end items-center h-16 px-4 border-b border-b-gray-200 transition-default",
        {
          "left-56": sidebarOpen,
          "left-16": !sidebarOpen,
        }
      )}
    >
      {/* <div
        className={clsx(
          "relative flex-center size-8 rounded-lg group transition-default hover:cursor-pointer hover:bg-hover-bg",
          {
            "opacity-0": sidebarOpen,
            "opacity-100": !sidebarOpen,
          }
        )}
        onClick={toggleSidebar}
      >
        <PanelLeftOpen size={18} className="text-gray-700" />
        <DefaultTooltip direction="right" label="펼치기" />
      </div> */}
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
