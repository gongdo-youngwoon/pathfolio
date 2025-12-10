export const TERM_AGREEMENT_LIST = [
  {
    id: "age",
    label: "[필수] 만 14세 이상입니다.",
    required: true,
    hasDetail: false,
  },
  {
    id: "service",
    label: "[필수] 코드잇 이용 약관에 동의",
    required: true,
    hasDetail: true,
  },
  {
    id: "privacy",
    label: "[필수] 개인정보 수집 및 이용에 동의",
    required: true,
    hasDetail: true,
  },
  {
    id: "marketing",
    label: "[선택] 마케팅 정보 수신 및 선택적 개인정보 제공",
    required: false,
    hasDetail: true,
  },
];
