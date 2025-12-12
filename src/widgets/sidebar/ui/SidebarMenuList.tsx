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
        "gap-1": !sidebarOpen,
      })}
    >
      {SIDEBAR_MENU.map((g) => {
        return (
          <div key={g.groupId}>
            {sidebarOpen && g.groupLabel && (
              <div className="mb-1 px-2 text-xs text-gray-700 font-bold">
                {g.groupLabel}
              </div>
            )}
            <ul className="flex flex-col gap-1">
              {g.menus.map((m) => {
                const Icon = m.icon;
                return (
                  <li
                    key={m.id}
                    className={clsx(
                      "relative flex items-center gap-2 h-9 px-2 rounded-lg group hover:cursor-pointer",
                      {
                        "bg-primary text-white": pathname === m.href,
                        "text-gray-500 hover:bg-hover hover:text-gray-700":
                          pathname !== m.href,
                      }
                    )}
                    onClick={() => router.push(m.href)}
                  >
                    <Icon size={18} className="shrink-0" />
                    {sidebarOpen && (
                      <div className="shrink-0 text-sm">{m.label}</div>
                    )}
                    {!sidebarOpen && (
                      <DefaultTooltip direction="right" label={m.label} />
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
