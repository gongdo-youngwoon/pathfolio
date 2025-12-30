"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/shared/store/useSidebarStore";
import { Bell, Search } from "lucide-react";
import { SIDEBAR_MENU } from "@/widgets/sidebar/model/sidebarMenu";

export default function PrivatePageHeader() {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);
  const pathname = usePathname();

  const currentPageTitle = (() => {
    for (const group of SIDEBAR_MENU) {
      for (const menu of group.menus) {
        if (menu.href === pathname) return menu.label;
      }
    }
    return "";
  })();

  return (
    <div
      className={clsx(
        "fixed right-0 flex justify-between items-center h-16 px-8 bg-white border-b border-b-gray-200 transition-default z-30",
        {
          "left-64": sidebarOpen,
          "left-[52px]": !sidebarOpen,
        }
      )}
    >
      <div className="text-gray-900 font-semibold">{currentPageTitle}</div>
      <div className="flex gap-2">
        <div className="flex-center size-9 rounded-lg hover:cursor-pointer hover:bg-hover">
          <Search size={20} className="text-gray-700" />
        </div>
        <div className="relative flex-center size-9 rounded-lg hover:cursor-pointer hover:bg-hover">
          <Bell size={20} className="text-gray-700" />
          <div className="absolute top-1 right-1 size-1.5 bg-primary rounded-full" />
        </div>
        <div className="flex gap-2 pl-2">
          <div className="size-9 bg-hover border-2 border-primary rounded-full" />
          <div>
            <div className="text-gray-700 text-sm font-bold">공도</div>
            <div className="text-gray-500 text-xs">Free Plan</div>
          </div>
        </div>
      </div>
    </div>
  );
}
