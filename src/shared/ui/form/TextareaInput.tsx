import { ChangeEvent, useRef } from "react";

interface TextareaInputProps {
  name: string;
  label: string;
  description?: string;
  placeholder: string;
  value: string;
  updateInputValue: (name: string, value: string) => void;
}

export default function TextareaInput({
  name,
  label,
  description,
  placeholder,
  value,
  updateInputValue,
}: TextareaInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateInputValue(name, value);

    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm">
        <span className="mr-1 text-gray-700 font-semibold">{label}</span>
        <span className="text-error">*</span>
      </label>
      {description && (
        <div className="text-gray-400 text-sm">{description}</div>
      )}
      <div className="bg-white border border-gray-200 rounded-lg transition-default has-focus:border-primary has-focus:ring-2 has-focus:ring-primary/15">
        <textarea
          ref={textareaRef}
          className="w-full p-4 rounded-lg text-sm text-gray-500 resize-none outline-none"
          name={name}
          placeholder={placeholder}
          value={value}
          rows={3}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
