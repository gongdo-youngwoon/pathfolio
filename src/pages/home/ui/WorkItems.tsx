import { AGENT_FEATURES } from "../model/agentFeatures";

export default function WorkItems() {
  return (
    <div>
      <div className="mb-3 text-gray-900 font-semibold">내 작업</div>
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
              <div className="flex-center h-10 bg-hover-bg rounded-lg text-gray-700 text-sm">
                {agent.buttonName}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
