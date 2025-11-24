"use client";

import clsx from "clsx";
import { useSidebarStore } from "@/shared/store/useSidebarStore";
import SidebarHeader from "./SidebarHeader";
import SidebarMenuList from "./SidebarMenuList";
import RecentChatThreads from "./RecentChatThreads";

export default function Sidebar() {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);

  return (
    <div
      className={clsx(
        "fixed top-0 bottom-0 pb-8 bg-white border-r border-gray-200 transition-default z-10 container-scroll",
        {
          "w-64 overflow-y-auto": sidebarOpen,
          "w-[52px]": !sidebarOpen,
        }
      )}
    >
      <SidebarHeader />
      <SidebarMenuList />
      {sidebarOpen && <RecentChatThreads />}
    </div>
  );
}
