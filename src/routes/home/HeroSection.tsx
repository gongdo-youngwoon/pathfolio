import { Infinity } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center mb-16">
      <div className="mb-2 text-2xl text-gray-700 font-semibold">
        패스폴리오와 함께
      </div>
      <div className="mb-8 text-5xl text-gray-900 font-extrabold">
        입시 전략을 바꾸면 인생이 바뀐다
      </div>
      <div className="flex items-center gap-2 text-primary text-2xl font-bold">
        <div>모든 입시 에이전트를</div>
        <Infinity size={36} />
        <div>무제한으로</div>
      </div>
    </div>
  );
}
