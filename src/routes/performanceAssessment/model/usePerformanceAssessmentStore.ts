import { create } from "zustand";

// 더미 수행평가 초안
const DUMMY_PERFORMANCE_ASSESSMENT = `
[수행평가 초안]

1. 평가 주제
- 문학 작품 속 인물 분석 및 감상문 작성

2. 평가 목표
- 작품의 주제를 이해하고 핵심 표현을 찾아 설명할 수 있다.
- 등장인물의 성격을 근거와 함께 분석할 수 있다.

3. 제출 형식
- A4 1~2장 분량
- 표지 포함, 본문 글자 크기 11pt

4. 평가 기준
- 주제 이해도 (30점)
- 인물 분석의 타당성 (40점)
- 글의 구성과 표현 (30점)
`;

interface State {
  isGenerating: boolean; // 생성 중인지 표시
  generatedDraft: string | null; // 생성된 초안
}

interface Actions {
  generatePerformanceAssessment: () => void; // 초안 생성 함수
  resetDraft: () => void; // 초기화 함수
}

export const usePerformanceAssessmentStore = create<State & Actions>((set) => ({
  isGenerating: false,
  generatedDraft: null,

  generatePerformanceAssessment: () => {
    set({ isGenerating: true });

    setTimeout(() => {
      set({
        generatedDraft: DUMMY_PERFORMANCE_ASSESSMENT,
        isGenerating: false,
      });
    }, 3000);
  },

  resetDraft: () => set({ isGenerating: false, generatedDraft: "" }),
}));
