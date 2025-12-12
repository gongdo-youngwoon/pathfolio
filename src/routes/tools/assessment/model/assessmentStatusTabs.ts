export const ASSESSMENT_STATUS_TABS: {
  id: string;
  label: string;
  statuses: ("in-progress" | "completed")[];
}[] = [
  {
    id: "all",
    label: "전체",
    statuses: ["in-progress", "completed"],
  },
  {
    id: "in-progress",
    label: "진행중",
    statuses: ["in-progress"],
  },
  {
    id: "completed",
    label: "완료",
    statuses: ["completed"],
  },
] as const;
