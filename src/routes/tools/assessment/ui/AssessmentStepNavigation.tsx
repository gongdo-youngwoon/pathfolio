"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSidebarStore } from "@/shared/store/useSidebarStore";

interface AssessmentStepNavigationProps {
  isNextValid: boolean;
}

export default function AssessmentStepNavigation({
  isNextValid,
}: AssessmentStepNavigationProps) {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);
  const searchParams = useSearchParams();
  const currentStep = Number(searchParams.get("step") ?? "1");
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "fixed bottom-0 right-0 flex justify-end items-center gap-2 h-20 px-8 bg-white border-t border-t-gray-200 text-sm transition-default z-10",
        {
          "left-64": sidebarOpen,
          "left-[52px]": !sidebarOpen,
        }
      )}
    >
      <div
        className="flex-center w-24 h-12 border border-gray-200 rounded-lg hover:cursor-pointer"
        onClick={() => router.push(`${pathname}?step=${currentStep - 1}`)}
      >
        이전
      </div>
      <div
        className={clsx("flex-center w-24 h-12 rounded-lg text-white", {
          "bg-primary/20 hover:cursor-not-allowed": !isNextValid,
          "bg-primary hover:cursor-pointer": isNextValid,
        })}
      >
        다음
      </div>
    </div>
  );
}
