import { MoveRight } from "lucide-react";
import { AGENT_FEATURES } from "../ai-chat/model/agentFeatures";

export default function AgentCardList() {
  return (
    <div className="flex flex-col items-center gap-8 mb-20">
      <ul className="grid grid-cols-4 gap-4">
        {AGENT_FEATURES.map((agent) => {
          const Icon = agent.icon;
          return (
            <li
              key={agent.id}
              className="flex flex-col justify-between h-56 p-4 border border-gray-200 rounded-lg"
            >
              <div className="flex-center size-10 bg-primary-bg rounded-lg">
                <Icon className="text-primary" />
              </div>
              <div>
                <div className="mb-1 text-gray-700 font-semibold">
                  {agent.title}
                </div>
                <div className="text-sm text-gray-500">{agent.desc}</div>
              </div>
              <div className="flex-center h-10 bg-hover-bg rounded-lg text-gray-700 text-sm hover:cursor-pointer">
                {agent.buttonName}
              </div>
            </li>
          );
        })}
      </ul>
      <div className="flex-center gap-2 w-52 h-12 border border-gray-200 rounded-lg text-gray-700">
        <div className="text-sm">모든 에이전트 보러가기</div>
        <MoveRight size={18} />
      </div>
    </div>
  );
}
