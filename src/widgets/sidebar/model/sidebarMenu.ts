import {
  Plus,
  Star,
  NotebookPen,
  CalendarClock,
  Target,
  LineChart,
  Users,
  GraduationCap,
  ClipboardList,
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
        id: "favorites",
        icon: Star,
        label: "즐겨찾기",
        href: "/favorites",
      },
      {
        id: "community",
        icon: Users,
        label: "커뮤니티",
        href: "/community",
      },
    ],
  },
  {
    sectionId: "section-2",
    sectionLabel: "에이전트",
    items: [
      {
        id: "binote",
        icon: NotebookPen,
        label: "빈노트",
        href: "/agents/binote",
      },
      {
        id: "scheduler",
        icon: CalendarClock,
        label: "스케줄러",
        href: "/agents/scheduler",
      },
      {
        id: "assessment-assistant",
        icon: ClipboardList,
        label: "수행평가",
        href: "/agents/assessment-assistant",
      },
    ],
  },
  {
    sectionId: "section-3",
    sectionLabel: "입시진로",
    items: [
      {
        id: "record-analysis",
        icon: Target,
        label: "생기부 진단",
        href: "/admission/record-analysis",
      },
      {
        id: "simulator",
        icon: LineChart,
        label: "대입 시뮬레이터",
        href: "/admission/simulator",
      },
      {
        id: "finder",
        icon: GraduationCap,
        label: "대학 전형 찾기",
        href: "/admission/finder",
      },
    ],
  },
] as const;
