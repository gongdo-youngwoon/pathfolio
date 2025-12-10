"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import DefaultTooltip from "../tooltip/DefaultTooltip";

interface AuthPasswordInputProps {
  placeholder: string;
}

export default function AuthPasswordInput({
  placeholder,
}: AuthPasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center gap-2 h-14 px-4 border border-gray-200 rounded-lg transition-default has-focus:border-primary has-focus:ring-2 has-focus:ring-primary/15">
      <Lock size={18} className="text-primary" />
      <input
        className="flex-1 h-full text-gray-700 outline-none"
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
      />
      {showPassword ? (
        <div className="relative group">
          <Eye
            className="text-gray-400 hover:cursor-pointer"
            size={20}
            onClick={() => setShowPassword(false)}
          />
          <DefaultTooltip direction="left" label="숨기기" />
        </div>
      ) : (
        <div className="relative group">
          <EyeOff
            className="text-gray-400 hover:cursor-pointer"
            size={20}
            onClick={() => setShowPassword(true)}
          />
          <DefaultTooltip direction="left" label="보이기" />
        </div>
      )}
    </div>
  );
}
