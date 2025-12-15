"use client";

import clsx from "clsx";
import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionWrapperProps {
  isOpen: boolean;
  label: string;
  children: ReactNode;
}

export default function AccordionWrapper({
  isOpen,
  label,
  children,
}: AccordionWrapperProps) {
  const [toggle, setToggle] = useState(isOpen);
  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <div className="border border-gray-200 rounded-lg">
      <div
        className={clsx(
          "flex justify-between items-center h-16 px-8 hover:cursor-pointer",
          {
            "border-b border-b-gray-200": toggle,
          }
        )}
        onClick={handleToggle}
      >
        <div className="text-gray-700 font-semibold">{label}</div>
        <ChevronDown
          className={clsx("text-primary transition-default", {
            "rotate-180": toggle,
          })}
        />
      </div>
      {toggle && <div className="flex flex-col gap-8 p-8">{children}</div>}
    </div>
  );
}
