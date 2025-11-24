import { ChangeEvent } from "react";

interface TextInputProps {
  name: string;
  label: string;
  description?: string;
  placeholder: string;
  value: string;
  updateInputValue: (name: string, value: string) => void;
}

export default function TextInput({
  name,
  label,
  description,
  placeholder,
  value,
  updateInputValue,
}: TextInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateInputValue(name, value);
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
      <input
        className="h-11 px-4 border border-gray-200 rounded-lg text-gray-500 text-sm outline-none transition-default focus:border-primary focus:ring-2 focus:ring-primary/15"
        name={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
