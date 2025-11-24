import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import { useSidebarStore } from "@/shared/store/useSidebarStore";
import { SIDEBAR_MENU } from "../model/sidebarMenu";
import DefaultTooltip from "@/shared/ui/tooltip/DefaultTooltip";

export default function SidebarMenuList() {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={clsx("flex flex-col px-2 bg-white", {
        "gap-6": sidebarOpen,
      })}
    >
      {SIDEBAR_MENU.map((section) => {
        return (
          <div key={section.sectionId}>
            {sidebarOpen && section.sectionLabel && (
              <div className="mb-1 px-2 text-xs text-gray-700 font-bold">
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
                      "relative flex items-center gap-2 h-9 px-2 rounded-lg group hover:cursor-pointer",
                      {
                        "bg-primary text-white": pathname === menu.href,
                        "text-gray-500 hover:bg-hover-bg hover:text-gray-700":
                          pathname !== menu.href,
                      }
                    )}
                    onClick={() => router.push(menu.href)}
                  >
                    <Icon size={18} className="shrink-0" />
                    {sidebarOpen && (
                      <div className="shrink-0 text-sm">{menu.label}</div>
                    )}
                    {!sidebarOpen && (
                      <DefaultTooltip direction="right" label={menu.label} />
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
