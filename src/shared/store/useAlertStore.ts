import { create } from "zustand";

interface State {
  successAlert: {
    isOpen: boolean;
    message: string;
  };
}

interface Actions {
  showSuccessAlert: (message: string) => void;
  hideSuccessAlert: () => void;
}

export const useAlertStore = create<State & Actions>((set) => ({
  successAlert: { isOpen: false, message: "" },

  showSuccessAlert: (message) =>
    set(() => ({ successAlert: { isOpen: true, message } })),
  hideSuccessAlert: () =>
    set(() => ({ successAlert: { isOpen: false, message: "" } })),
}));
