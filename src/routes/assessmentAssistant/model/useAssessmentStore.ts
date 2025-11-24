import { create } from "zustand";

interface State {
  assessmentInputValue: {
    title: string;
    subTitle: string;
  };
}

interface Actions {
  setAssessmentInputValue: () => void;
}

export const useAlertStore = create<State & Actions>((set) => ({
  assessmentInputValue: {
    title: "",
    subTitle: "",
  },
  setAssessmentInputValue: () =>
    set((state) => ({
      assessmentInputValue: { ...state.assessmentInputValue },
    })),
}));
