import HeroCopy from "@/routes/ai-chat/ui/HeroCopy";
import HeroPromptInput from "@/routes/ai-chat/ui/HeroPromptInput";
import AgentFeatures from "@/routes/ai-chat/ui/AgentFeatures";

export default function AiChatPage() {
  return (
    <div className="w-[824px] mx-auto py-16">
      <HeroCopy />
      <HeroPromptInput />
      <AgentFeatures />
    </div>
  );
}
