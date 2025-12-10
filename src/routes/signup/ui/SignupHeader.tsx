"use client";

import { useRouter } from "next/navigation";
import MainLogo from "@/shared/ui/logo/MainLogo";

export default function SignupHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-3">
      <MainLogo iconSize={32} fontSize="text-3xl" />
      <div className="text-xs">
        <span className="text-gray-700">이미 회원이신가요?</span>{" "}
        <span
          className="text-primary font-semibold hover:cursor-pointer hover:underline"
          onClick={() => router.push("/login")}
        >
          로그인하기
        </span>
      </div>
    </div>
  );
}
