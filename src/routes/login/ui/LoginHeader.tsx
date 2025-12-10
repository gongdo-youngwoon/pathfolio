"use client";

import { useRouter } from "next/navigation";
import MainLogo from "@/shared/ui/logo/MainLogo";

export default function LoginHeader() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-3">
      <MainLogo iconSize={32} fontSize="text-3xl" />
      <div className="text-xs text-center">
        <span className="text-gray-700">회원이 아니신가요?</span>{" "}
        <span
          className="text-primary font-semibold hover:cursor-pointer hover:underline"
          onClick={() => router.push("/signup")}
        >
          회원가입 하기
        </span>
      </div>
    </div>
  );
}
