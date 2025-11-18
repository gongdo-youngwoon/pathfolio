import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useSidebarStore } from "@/shared/store/useSidebarStore";
import { SIDEBAR_MENU } from "../model/sidebarMenu";

export default function SidebarMenuList() {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-6 p-3.5">
      {SIDEBAR_MENU.map((section) => {
        return (
          <div key={section.sectionId}>
            {section.sectionLabel && (
              <div className="mb-1.5 text-xs text-gray-700 font-bold">
                {section.sectionLabel}
              </div>
            )}
            <ul className="flex flex-col gap-1">
              {section.items.map((menu) => {
                const Icon = menu.icon;
                return (
                  <li
                    key={menu.id}
                    className={clsx(
                      "flex items-center gap-2 h-9 px-2 rounded-lg hover:cursor-pointer",
                      {
                        "bg-primary text-white": pathname === menu.href,
                        "text-gray-500 hover:bg-hover-bg hover:text-gray-700":
                          pathname !== menu.href,
                      }
                    )}
                  >
                    <Icon size={18} className="shrink-0" />
                    {sidebarOpen && (
                      <div className="shrink-0 text-sm">{menu.label}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
