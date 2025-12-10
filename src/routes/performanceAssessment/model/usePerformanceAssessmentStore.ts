import { create } from "zustand";
import { DUMMY_PERFORMANCE_ASSESSMENT } from "./dummyPerformanceAssessment";

interface State {
  isGenerating: boolean;
  generatedDraft: string | null;
  loadingLogs: string[];
}

interface Actions {
  generatePerformanceAssessment: () => void;
  resetDraft: () => void;
}

export const usePerformanceAssessmentStore = create<State & Actions>((set) => ({
  isGenerating: false,
  generatedDraft: null,
  loadingLogs: [],

  generatePerformanceAssessment: () => {
    const STEPS = [
      "📄 제출된 수행평가 지시서 내용을 정밀 분석 중입니다.",
      "🤖 핵심 주제와 학습 목표, 중요 키워드를 추출하고 있습니다.",
      "🧠 관련 교과 자료 및 최신 AI 연구 정보를 참조하며 학습 중입니다.",
      "📊 평가 기준과 핵심 성취 요소를 체계적으로 구조화하고 있습니다.",
      "✍️ 논리적 흐름과 근거 기반 문단을 생성하며 초안을 구성하고 있습니다.",
      "✅ 생성된 초안을 최종 검토 및 교정하여 제출 가능한 형태로 준비 중입니다.",
    ];

    set({ isGenerating: true, loadingLogs: [] });

    let index = 0;

    const interval = setInterval(() => {
      // 새 메시지를 로그에 추가
      set((state) => ({
        loadingLogs: [...state.loadingLogs, STEPS[index]],
      }));

      index++;

      // 마지막이면 완료
      if (index >= STEPS.length) {
        clearInterval(interval);

        set({
          generatedDraft: DUMMY_PERFORMANCE_ASSESSMENT,
          isGenerating: false,
        });
      }
    }, 2000);
  },

  resetDraft: () =>
    set({
      isGenerating: false,
      generatedDraft: null,
      loadingLogs: [],
    }),
}));
