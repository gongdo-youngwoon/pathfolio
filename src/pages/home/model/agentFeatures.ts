import { ClipboardList, LineChart, Route, Target } from "lucide-react";

export const AGENT_FEATURES = [
  {
    id: "performance-helper",
    icon: ClipboardList,
    title: "수행평가 도우미",
    desc: "AI가 수행평가 보고서를 자동으로 설계·작성하고 제출까지 효율적으로 관리합니다.",
    buttonName: "수행평가 시작하기",
  },
  {
    id: "admission-simulator",
    icon: LineChart,
    title: "대입 전형 시뮬레이터",
    desc: "학생부 데이터를 기반으로 지원 가능한 전형을 분석하고 합격 가능성을 예측합니다.",
    buttonName: "시뮬레이션 실행",
  },
  {
    id: "student-record-diagnosis",
    icon: Target,
    title: "생기부 진단",
    desc: "생활기록부의 강점·약점을 정밀 분석하여 전형 대응 전략과 개선 방향을 제시합니다.",
    buttonName: "지금 진단하기",
  },
  {
    id: "admission-roadmap",
    icon: Route,
    title: "입시 로드맵",
    desc: "목표 진로와 역량을 바탕으로 개인 맞춤형 학습 경로와 입시 준비 전략을 추천합니다.",
    buttonName: "로드맵 보기",
  },
];
