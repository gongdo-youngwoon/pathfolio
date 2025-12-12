import { useRef } from "react";
import useOutsideClick from "@/shared/hooks/useOutsideClick";

interface ContextMenuProps {
  options: {
    id: string;
    label: string;
    onClick: () => void;
  }[];
  handleClose: () => void;
}
[];

export default function ContextMenu({
  options,
  handleClose,
}: ContextMenuProps) {
  const ref = useRef(null);
  useOutsideClick(ref, handleClose);

  return (
    <div
      ref={ref}
      className="absolute top-9 right-0 w-24 py-2 bg-white border border-gray-200 rounded-lg shadow-md *:flex *:items-center *:h-8"
    >
      {options.map((o) => {
        return (
          <div
            key={o.id}
            className="px-3 text-gray-500 text-sm hover:cursor-pointer hover:bg-hover hover:text-gray-700"
            onClick={o.onClick}
          >
            {o.label}
          </div>
        );
      })}
    </div>
  );
}
