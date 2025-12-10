import { Mail } from "lucide-react";

export default function AuthEmailInput() {
  return (
    <div className="flex items-center gap-2 h-14 px-4 border border-gray-200 rounded-lg transition-default has-focus:border-primary has-focus:ring-2 has-focus:ring-primary/15">
      <Mail size={18} className="text-primary" />
      <input
        className="flex-1 h-full text-gray-700 outline-none"
        type="email"
        placeholder="이메일"
      />
    </div>
  );
}
