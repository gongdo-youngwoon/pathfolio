"use client";

import { useSidebarStore } from "@/shared/store/useSidebarStore";
import clsx from "clsx";

export default function DefaultPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);

  return (
    <div
      className={clsx("py-16 transition-default", {
        "pl-64": sidebarOpen,
        "pl-[52px]": !sidebarOpen,
      })}
    >
      {children}
    </div>
  );
}
