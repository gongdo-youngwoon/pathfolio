import {
  Copy,
  Ellipsis,
  RefreshCw,
  ThumbsDown,
  ThumbsUp,
  Upload,
} from "lucide-react";

export const ACTION_ITEMS = [
  {
    id: "action-1",
    icon: Copy,
    label: "복사하기",
  },
  {
    id: "action-2",
    icon: ThumbsUp,
    label: "좋은 응답",
  },
  {
    id: "action-3",
    icon: ThumbsDown,
    label: "별로인 응답",
  },
  {
    id: "action-4",
    icon: Upload,
    label: "공유하기",
  },
  {
    id: "action-5",
    icon: RefreshCw,
    label: "다시 생성",
  },
  {
    id: "action-6",
    icon: Ellipsis,
    label: "더보기",
  },
];
