import { create } from "zustand";

type SidebarState = {
  sidebarOpen: boolean;
};

type SidebarActions = {
  toggleSidebar: () => void;
};

export const useSidebarStore = create<SidebarState & SidebarActions>((set) => ({
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
