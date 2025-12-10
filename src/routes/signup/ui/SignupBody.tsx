"use client";

import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import SocialLogin from "@/routes/login/ui/SocialLogin";
import SignupForm from "./SignupForm";
import { useRouter } from "next/navigation";

export default function SignupBody() {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const router = useRouter();

  const handleGoBack = () => setShowSignupForm(false);

  return showSignupForm ? (
    <SignupForm handleGoBack={handleGoBack} />
  ) : (
    <>
      <ul className="flex flex-col gap-4">
        <li
          className="flex-center gap-4 h-12 bg-[#ffe602] rounded-lg text-gray-700 text-sm font-semibold hover:cursor-pointer"
          onClick={() => router.push("/ai-chat")}
        >
          <MessageCircle size={18} />
          <div>카카오로 3초만에 시작하기</div>
        </li>
        <li
          className="flex-center gap-4 h-12 bg-hover-bg rounded-lg text-gray-700 text-sm font-semibold hover:cursor-pointer"
          onClick={() => setShowSignupForm(true)}
        >
          <Mail size={18} />
          <div>이메일로 가입하기</div>
        </li>
      </ul>
      <SocialLogin />
    </>
  );
}
