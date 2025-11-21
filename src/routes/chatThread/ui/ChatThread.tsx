"use client";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { useChatStore } from "@/shared/store/useChatStore";
import { getTestResponse } from "@/shared/utils/getTestResponse";

interface ChatThreadProps {
  id: string;
}

export default function ChatThread({ id }: ChatThreadProps) {
  const [isThinking, setIsThinking] = useState(false);
  const { chatThreads, addMessageToThread } = useChatStore((s) => s);
  const chatThread = chatThreads.find((t) => t.id === id);

  useEffect(() => {
    if (!chatThread) return;

    const lastMessage = chatThread.messages[chatThread.messages.length - 1];

    if (lastMessage.role === "user") {
      setIsThinking(true);

      const message = {
        role: "assistant",
        content: getTestResponse(),
      };

      const timer = setTimeout(() => {
        addMessageToThread(id, message);
        setIsThinking(false);
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [chatThread?.messages]);

  if (!chatThread) return null;

  return (
    <div className="pb-40">
      <ul className="flex flex-col gap-8">
        {chatThread.messages.map((message, index) => {
          return (
            <li
              key={index}
              className={clsx("max-w-[480px] text-sm text-gray-700", {
                "self-end p-4 bg-hover-bg rounded-lg": message.role === "user",
              })}
            >
              {message.content}
            </li>
          );
        })}

        {isThinking && <li className="text-gray-500 italic">생각중...</li>}
      </ul>
    </div>
  );
}
