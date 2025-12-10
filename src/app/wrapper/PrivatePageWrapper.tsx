"use client";

import clsx from "clsx";
import { useSidebarStore } from "@/shared/store/useSidebarStore";

export default function PrivatePageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);

  return (
    <div
      className={clsx("pt-16 transition-default", {
        "pl-64": sidebarOpen,
        "pl-[52px]": !sidebarOpen,
      })}
    >
      {children}
    </div>
  );
}
