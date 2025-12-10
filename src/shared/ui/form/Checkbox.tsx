import clsx from "clsx";
import { Check } from "lucide-react";

interface CheckboxProps {
  checked: boolean;
  handleClick: () => void;
}

export default function Checkbox({ checked, handleClick }: CheckboxProps) {
  return (
    <div
      className={clsx(
        "flex-center size-5 border rounded-md hover:cursor-pointer",
        {
          "bg-primary border-primary ring ring-primary ring-opacity-10":
            checked,
          "border-gray-300": !checked,
        }
      )}
      onClick={handleClick}
    >
      {checked && <Check size={16} className="text-primary" />}
    </div>
  );
}
