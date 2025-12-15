import { ChangeEvent, useRef } from "react";

interface TextareaInputProps {
  name: string;
  label: string;
  placeholder: string;
  value: string;
}

export default function TextareaInput({
  name,
  label,
  placeholder,
  value,
}: TextareaInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    console.log(name, value);

    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <div className="flex flex-col gap-2 text-sm">
      <label className="text-gray-700">{label}</label>
      <div className="bg-white border border-gray-200 rounded-lg transition-default has-focus:border-primary has-focus:ring-2 has-focus:ring-primary/10">
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
