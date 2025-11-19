import AgentFeatures from "@/pages/home/ui/AgentFeatures";
import ServiceHeroCopy from "@/pages/home/ui/ServiceHeroCopy";
import WorkItems from "@/pages/home/ui/WorkItems";

export default function Home() {
  return (
    <div className="w-[824px] mx-auto">
      <ServiceHeroCopy />
      <AgentFeatures />
      <WorkItems />
    </div>
  );
}
