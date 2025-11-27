import clsx from "clsx";
import { FilePlusCorner, Plus, X } from "lucide-react";
import { ChangeEvent, useRef } from "react";

interface SingleFileInputProps {
  label: string;
  description: string;
  value: File | null;
  updateInputValue: (name: string, value: File | null) => void;
}

export default function SingleFileInput({
  label,
  description,
  value,
  updateInputValue,
}: SingleFileInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    const file = files[0];
    updateInputValue("file", file);
  };

  const resetFile = () => {
    updateInputValue("file", null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm">
        <span className="mr-1 text-gray-700 font-semibold">{label}</span>
        <span className="text-error">*</span>
      </div>
      {description && (
        <div className="text-gray-400 text-xs">{description}</div>
      )}
      <div className="flex gap-2">
        <div
          className={clsx(
            "grow flex items-center gap-2 h-11 px-4 border border-gray-200 text-sm rounded-lg",
            {
              "bg-white text-gray-500": value,
              "bg-gray-100 text-gray-300": !value,
            }
          )}
        >
          <FilePlusCorner size={16} className="shrink-0" />
          {!value ? (
            <div>파일을 업로드 해주세요.</div>
          ) : (
            <div className="grow flex justify-between items-center">
              <div className="w-36 truncate">{value.name}</div>
              <div
                className="shrink-0 flex-center size-6 bg-hover-bg rounded-full hover:cursor-pointer"
                onClick={resetFile}
              >
                <X size={16} />
              </div>
            </div>
          )}
        </div>
        <label
          className="shrink-0 flex-center gap-2 w-28 border border-gray-200 rounded-lg hover:cursor-pointer"
          htmlFor="single-file-upload"
        >
          <Plus size={18} className="text-primary" />
          <div className="text-gray-700 text-sm font-semibold">파일 추가</div>
        </label>
      </div>
      <input
        ref={fileInputRef}
        id="single-file-upload"
        className="hidden"
        type="file"
        onChange={handleChange}
      />
    </div>
  );
}
