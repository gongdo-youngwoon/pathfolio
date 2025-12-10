import { MoveLeft } from "lucide-react";
import AuthEmailInput from "@/shared/ui/authForm/AuthEmailInput";
import AuthPasswordInput from "@/shared/ui/authForm/AuthPasswordInput";
import TermsAgreement from "./TermsAgreement";

interface SignupFormProps {
  handleGoBack: () => void;
}

export default function SignupForm({ handleGoBack }: SignupFormProps) {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <AuthEmailInput />
      <AuthPasswordInput placeholder="비밀번호" />
      <AuthPasswordInput placeholder="비밀번호 확인" />
      <TermsAgreement />
      <button className="h-12 bg-primary text-white rounded-lg hover:cursor-pointer">
        가입하기
      </button>
      <div
        className="flex items-center gap-2 h-10 text-gray-700 hover:cursor-pointer"
        onClick={handleGoBack}
      >
        <MoveLeft size={18} />
        <div>뒤로가기</div>
      </div>
    </div>
  );
}
