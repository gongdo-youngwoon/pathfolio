import { AGENT_FEATURES } from "../model/agentFeatures";

export default function AgentFeatures() {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-2 mb-3">
        <div className="text-gray-900 font-semibold">에이전트</div>
        <div className="flex-center w-10 h-5 border border-error rounded-full text-error text-xs">
          Beta
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-4">
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
    </div>
  );
}
