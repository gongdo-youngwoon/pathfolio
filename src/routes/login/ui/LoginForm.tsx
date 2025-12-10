import AuthEmailInput from "@/shared/ui/authForm/AuthEmailInput";
import AuthPasswordInput from "@/shared/ui/authForm/AuthPasswordInput";

export default function LoginForm() {
  return (
    <div className="flex flex-col gap-4 text-sm">
      <AuthEmailInput />
      <AuthPasswordInput placeholder="비밀번호" />
      <button className="h-12 bg-primary text-white rounded-lg">
        로그인 하기
      </button>
    </div>
  );
}
