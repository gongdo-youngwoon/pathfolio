export type AssessmentStatus = "in-progress" | "completed";

export type AssessmentStatusConfig = {
  label: string;
  textColor: string;
  bgColor: string;
  buttonLabel: string;
};

export const ASSESSMENT_STATUS_MAP: Record<
  AssessmentStatus,
  AssessmentStatusConfig
> = {
  "in-progress": {
    label: "진행중",
    textColor: "text-warning",
    bgColor: "bg-warning/10",
    buttonLabel: "이어하기",
  },
  completed: {
    label: "완료",
    textColor: "text-success",
    bgColor: "bg-success/10",
    buttonLabel: "결과보기",
  },
};

export const ASSESSMENT_STATUS_TABS: {
  id: string;
  label: string;
  statuses: AssessmentStatus[];
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
