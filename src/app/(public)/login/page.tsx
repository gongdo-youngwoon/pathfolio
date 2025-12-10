import LoginHeader from "@/routes/login/ui/LoginHeader";
import LoginForm from "@/routes/login/ui/LoginForm";
import SocialLogin from "@/routes/login/ui/SocialLogin";

export default function LoginPage() {
  return (
    <div className="flex flex-col gap-10 w-96 mx-auto py-20">
      <LoginHeader />
      <LoginForm />
      <SocialLogin />
    </div>
  );
}
