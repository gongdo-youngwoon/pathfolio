import HeroCopy from "@/routes/home/ui/HeroCopy";
import HeroPromptInput from "@/routes/home/ui/HeroPromptInput";
import AgentFeatures from "@/routes/home/ui/AgentFeatures";

export default function Home() {
  return (
    <div className="w-[824px] mx-auto py-16">
      <HeroCopy />
      <HeroPromptInput />
      <AgentFeatures />
    </div>
  );
}
