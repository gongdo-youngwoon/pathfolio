import SignupHeader from "@/routes/signup/ui/SignupHeader";
import SignupBody from "@/routes/signup/ui/SignupBody";

export default function SignupPage() {
  return (
    <div className="flex flex-col gap-10 w-96 mx-auto py-20">
      <SignupHeader />
      <SignupBody />
    </div>
  );
}
