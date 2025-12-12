export interface AssessmentSchema {
  id: string;
  title: string;
  subject: string;
  type: string;
  grade: number;
  semester: string;
  dueDate: string;
  status: "in-progress" | "completed";
}

export const DUMMY_ASSESSMENTS: AssessmentSchema[] = [
  {
    id: "assessment-001",
    title: "환경오염 해결 방안 탐구 보고서",
    subject: "과학",
    type: "보고서",
    grade: 2,
    semester: "1학기",
    dueDate: "2025-03-18",
    status: "in-progress",
  },
  {
    id: "assessment-002",
    title: "우리 지역 사회 문제 조사",
    subject: "사회",
    type: "발표",
    grade: 2,
    semester: "1학기",
    dueDate: "2025-03-12",
    status: "completed",
  },
  {
    id: "assessment-003",
    title: "문학 작품 주제 분석 에세이",
    subject: "국어",
    type: "에세이",
    grade: 1,
    semester: "2학기",
    dueDate: "2025-01-20",
    status: "in-progress",
  },
  {
    id: "assessment-004",
    title: "확률과 통계 실생활 적용 사례",
    subject: "수학",
    type: "프로젝트",
    grade: 3,
    semester: "1학기",
    dueDate: "2025-04-05",
    status: "completed",
  },
  {
    id: "assessment-005",
    title: "기후 변화 대응 정책 비교 발표",
    subject: "통합사회",
    type: "말하기",
    grade: 2,
    semester: "2학기",
    dueDate: "2025-06-10",
    status: "in-progress",
  },
] as const;
