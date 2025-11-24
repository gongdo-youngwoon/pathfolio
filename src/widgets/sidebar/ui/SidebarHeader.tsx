import clsx from "clsx";
import { useSidebarStore } from "@/shared/store/useSidebarStore";
import { Map, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import DefaultTooltip from "@/shared/ui/tooltip/DefaultTooltip";

export default function SidebarHeader() {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);
  const toggleSidebar = useSidebarStore((s) => s.toggleSidebar);

  return (
    <div className="sticky top-0 flex justify-between items-center px-2 py-4 bg-white z-10">
      <div className="flex items-center h-9">
        <div
          className={clsx("relative flex-center size-9 rounded-lg group", {
            "hover:cursor-pointer hover:bg-hover-bg": !sidebarOpen,
          })}
          onClick={() => {
            if (!sidebarOpen) {
              toggleSidebar();
            }
          }}
        >
          <Map
            size={18}
            className={clsx("text-primary", {
              "group-hover:hidden": !sidebarOpen,
            })}
          />
          <PanelLeftOpen
            size={18}
            className={clsx("hidden text-gray-700", {
              "group-hover:block": !sidebarOpen,
            })}
          />
          {!sidebarOpen && <DefaultTooltip direction="right" label="펼치기" />}
        </div>
        {sidebarOpen && (
          <div className="text-primary text-lg font-black">PATHFOLIO</div>
        )}
      </div>
      {sidebarOpen && (
        <div
          className="relative flex-center size-9 rounded-lg text-gray-500 group hover:cursor-pointer hover:bg-hover-bg hover:text-gray-700"
          onClick={toggleSidebar}
        >
          <PanelLeftClose size={18} />
          <DefaultTooltip direction="right" label="접기" />
        </div>
      )}
    </div>
  );
}
