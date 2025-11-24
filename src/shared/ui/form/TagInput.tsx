import { ChangeEvent, FormEvent, useState } from "react";
import { Send } from "lucide-react";

interface TagInputProps {
  name: string;
  label: string;
  description: string;
  placeholder: string;
  keywords: string[];
  updateInputValue: (name: string, value: string) => void;
  deleteKeyword: (keyword: string) => void;
}

export default function TagInput({
  name,
  label,
  description,
  placeholder,
  keywords,
  updateInputValue,
  deleteKeyword,
}: TagInputProps) {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  const handleClick = () => {
    if (keyword.length === 0) return;
    updateInputValue(name, keyword);
    setKeyword("");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.length === 0) return;
    updateInputValue(name, keyword);
    setKeyword("");
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-700 font-semibold">{label}</label>
      <div className="text-sm text-gray-400">{description}</div>
      <form
        className="flex items-center gap-2 h-11 px-3 border border-gray-200 rounded-lg transition-default has-focus:border-primary has-focus:ring-2 has-focus:ring-primary/15"
        onSubmit={handleSubmit}
      >
        <div className="w-4 text-primary text-center font-semibold">#</div>
        <input
          className="w-full h-full text-gray-500 text-sm outline-none"
          type="text"
          placeholder={placeholder}
          value={keyword}
          autoComplete="off"
          onChange={handleChange}
        />
        <Send
          size={20}
          className="text-gray-500 hover:cursor-pointer"
          onClick={handleClick}
        />
        <button className="hidden" />
      </form>
      {keywords.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => {
            return (
              <li
                className="flex items-center gap-2 h-8 px-3 bg-hover-bg rounded-full text-sm"
                key={index}
              >
                <div className="text-gray-700">{keyword}</div>
                <div
                  className="text-error hover:cursor-pointer"
                  onClick={() => deleteKeyword(keyword)}
                >
                  ✕
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
