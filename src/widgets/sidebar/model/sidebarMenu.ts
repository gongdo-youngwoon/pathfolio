import {
  Plus,
  Search,
  Star,
  NotebookPen,
  CalendarClock,
  FileCheck2,
  Target,
  LineChart,
  School,
  Building,
  GraduationCap,
  Users,
} from "lucide-react";

export const SIDEBAR_MENU = [
  {
    sectionId: "section-1",
    sectionLabel: null,
    items: [
      {
        id: "new-question",
        icon: Plus,
        label: "새 질문",
        href: "/",
      },
      {
        id: "search",
        icon: Search,
        label: "검색",
        href: "/search",
      },
      {
        id: "favorites",
        icon: Star,
        label: "즐겨찾기",
        href: "/favorites",
      },
    ],
  },
  {
    sectionId: "section-2",
    sectionLabel: "AI 에이전트",
    items: [
      {
        id: "ai-binote",
        icon: NotebookPen,
        label: "빈노트",
        href: "/agents/binote",
      },
      {
        id: "ai-scheduler",
        icon: CalendarClock,
        label: "스케줄러",
        href: "/agents/scheduler",
      },
      {
        id: "ai-evaluation",
        icon: FileCheck2,
        label: "수행평가",
        href: "/agents/evaluation",
      },
    ],
  },
  {
    sectionId: "section-3",
    sectionLabel: "입시진로",
    items: [
      {
        id: "admission-record",
        icon: Target,
        label: "생기부 진단",
        href: "/admission/record-analysis",
      },
      {
        id: "admission-simulator",
        icon: LineChart,
        label: "대입 시뮬레이터",
        href: "/admission/simulator",
      },
      {
        id: "admission-finder",
        icon: School,
        label: "대학 전형 찾기",
        href: "/admission/finder",
      },
    ],
  },

  {
    sectionId: "section-4",
    sectionLabel: "커뮤니티",
    items: [
      {
        id: "community-school",
        icon: Building,
        label: "학교별",
        href: "/community/school",
      },
      {
        id: "community-major",
        icon: GraduationCap,
        label: "전공별",
        href: "/community/major",
      },
      {
        id: "community-interest",
        icon: Users,
        label: "관심사별",
        href: "/community/interests",
      },
    ],
  },
] as const;
