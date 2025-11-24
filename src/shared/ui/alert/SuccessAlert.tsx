"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { useAlertStore } from "@/shared/store/useAlertStore";
import { Check } from "lucide-react";

export default function SuccessAlert() {
  const { successAlert, hideSuccessAlert } = useAlertStore((s) => s);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (successAlert.isOpen) {
      timer = setTimeout(hideSuccessAlert, 2000);
    }

    return () => clearTimeout(timer);
  }, [successAlert.isOpen, hideSuccessAlert]);

  return (
    <div
      className={clsx(
        "fixed top-8 left-1/2 -translate-x-1/2 flex items-center gap-4 w-80 h-16 px-4 bg-gray-700 rounded-full shadow-md transition-default z-10",
        {
          "invisible opacity-0 -translate-y-24": !successAlert.isOpen,
          "visible opacity-100 translate-y-0": successAlert.isOpen,
        }
      )}
    >
      <div className="flex-center size-8 bg-primary rounded-full">
        <Check size={20} className="text-white" />
      </div>
      <div className="text-white text-sm">{successAlert.message}</div>
    </div>
  );
}
