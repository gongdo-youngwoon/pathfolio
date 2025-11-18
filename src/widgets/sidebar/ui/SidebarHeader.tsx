import { useSidebarStore } from "@/shared/store/useSidebarStore";
import { Map, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import DefaultTooltip from "@/shared/ui/tooltip/DefaultTooltip";

export default function SidebarHeader() {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);
  const toggleSidebar = useSidebarStore((s) => s.toggleSidebar);

  return (
    <div className="flex justify-between items-center h-16 px-3.5 border-b border-b-gray-200">
      {sidebarOpen && (
        <div className="flex items-center gap-1 text-primary">
          <Map />
          <div className="text-lg font-black">PATHFOLIO</div>
        </div>
      )}
      <div
        className="relative flex-center size-9 rounded-lg text-gray-500 group hover:cursor-pointer hover:bg-hover-bg hover:text-gray-700"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? (
          <PanelLeftClose size={18} />
        ) : (
          <PanelLeftOpen size={18} />
        )}
        <DefaultTooltip
          direction="right"
          label={sidebarOpen ? "접기" : "펼치기"}
        />
      </div>
    </div>
  );
}
