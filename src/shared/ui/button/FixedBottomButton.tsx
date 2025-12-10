"use client";

import { useRouter } from "next/navigation";

interface FixedBottomButtonProps {
  href: string;
  label: string;
}

export default function FixedBottomButton({
  href,
  label,
}: FixedBottomButtonProps) {
  const router = useRouter();
  return (
    <div
      className="fixed bottom-10 left-1/2 -translate-x-1/2 flex-center w-96 h-12 bg-primary rounded-lg text-white hover:cursor-pointer"
      onClick={() => router.push(href)}
    >
      {label}
    </div>
  );
}
