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
    groupId: "section-1",
    groupLabel: null,
    menus: [
      {
        id: "new-question",
        icon: Plus,
        label: "새 질문",
        href: "/ai-chat",
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
    groupId: "section-2",
    groupLabel: "도구",
    menus: [
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
        id: "assessment",
        icon: ClipboardList,
        label: "수행평가",
        href: "/tools/assessment",
      },
    ],
  },
  // {
  //   groupId: "section-3",
  //   groupLabel: "입시진로",
  //   menus: [
  //     {
  //       id: "record-analysis",
  //       icon: Target,
  //       label: "생기부 진단",
  //       href: "/admission/record-analysis",
  //     },
  //     {
  //       id: "simulator",
  //       icon: LineChart,
  //       label: "대입 시뮬레이터",
  //       href: "/admission/simulator",
  //     },
  //     {
  //       id: "finder",
  //       icon: GraduationCap,
  //       label: "대학 전형 찾기",
  //       href: "/admission/finder",
  //     },
  //   ],
  // },
] as const;
