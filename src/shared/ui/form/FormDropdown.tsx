import clsx from "clsx";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import useOutsideClick from "@/shared/hooks/useOutsideClick";

interface FormDropdownProps {
  width: string;
  label: string;
  options: {
    id: string;
    label: string;
    name: string;
    value: string;
  }[];
  value: string;
}

export default function FormDropdown({
  width,
  label,
  options,
  value,
}: FormDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  useOutsideClick(containerRef, () => setIsOpen(false));

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="text-gray-700">{label}</div>
      <div
        ref={containerRef}
        className={clsx(
          `relative ${width} h-11 border rounded-lg transition-default`,
          {
            "border-primary ring-2 ring-primary/10": isOpen,
            "border-gray-200 ": !isOpen,
          }
        )}
      >
        <div
          className="flex justify-between items-center w-full h-full pl-4 pr-2 hover:cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="text-gray-500">{value}</div>
          <ChevronDown
            size={20}
            className={clsx("text-primary transition-default", {
              "rotate-180": isOpen,
            })}
          />
        </div>
        {isOpen && (
          <ul className="absolute top-11 left-0 right-0 max-h-80 py-2 bg-white border border-gray-200 rounded-lg container-scroll overflow-y-auto shadow-md z-10">
            {options.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex items-center h-9 px-4 text-gray-700 hover:cursor-pointer hover:bg-hover"
                  onClick={() => {
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
