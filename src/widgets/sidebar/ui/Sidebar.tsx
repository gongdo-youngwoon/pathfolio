"use client";

import clsx from "clsx";
import { useSidebarStore } from "@/shared/store/useSidebarStore";
import SidebarHeader from "./SidebarHeader";
import SidebarMenuList from "./SidebarMenuList";

export default function Sidebar() {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);

  return (
    <div
      className={clsx(
        "fixed top-0 bottom-0 border-r border-gray-200 transition-default",
        {
          "w-56": sidebarOpen,
          "w-16": !sidebarOpen,
        }
      )}
    >
      <SidebarHeader />
      <SidebarMenuList />
    </div>
  );
}
