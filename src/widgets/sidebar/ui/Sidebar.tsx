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
        "fixed top-0 bottom-0 px-2 py-3 border-r border-gray-200 transition-default",
        {
          "w-64": sidebarOpen,
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
