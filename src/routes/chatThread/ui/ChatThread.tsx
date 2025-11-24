"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { useChatStore } from "@/shared/store/useChatStore";
import { getTestResponse } from "@/shared/utils/getTestResponse";
import { ACTION_ITEMS } from "../model/actionItems";
import DefaultTooltip from "@/shared/ui/tooltip/DefaultTooltip";

interface ChatThreadProps {
  id: string;
}

export default function ChatThread({ id }: ChatThreadProps) {
  const { isThinking, setIsThinking, chatThreads, addMessageToThread } =
    useChatStore((s) => s);
  const chatThread = chatThreads.find((t) => t.id === id);

  useEffect(() => {
    const lastMessage = chatThread?.messages.at(-1);

    if (!lastMessage || lastMessage.role !== "user") return;

    const timer = setTimeout(() => {
      addMessageToThread(id, {
        role: "assistant",
        content: getTestResponse(),
      });
      setIsThinking(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [chatThread?.messages.length]);

  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
    });
  }, [chatThread?.messages.length]);

  if (!chatThread) return null;

  return (
    <div className="pb-40">
      <ul className="flex flex-col gap-12">
        {chatThread.messages.map((message, index) => {
          return (
            <li
              key={index}
              className={clsx("text-sm text-gray-700", {
                "self-end max-w-[480px] px-4 py-2 bg-hover-bg rounded-lg":
                  message.role === "user",
              })}
            >
              <div className="leading-7 whitespace-pre-wrap">
                {message.content}
              </div>
              {message.role === "assistant" && (
                <ul className="flex items-center gap-2 h-14">
                  {ACTION_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.id}
                        className="relative flex-center size-7 rounded-lg group hover:cursor-pointer hover:bg-hover-bg"
                      >
                        <Icon
                          size={16}
                          className="text-gray-500 group-hover:text-gray-700"
                        />
                        <DefaultTooltip direction="bottom" label={item.label} />
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
        {isThinking && (
          <div className="self-start flex-center gap-1 items-end p-4 bg-hover-bg rounded-lg">
            <span className="animate-wave-dot bg-primary w-2 h-2 rounded-full"></span>
            <span className="animate-wave-dot bg-primary w-2 h-2 rounded-full animation-delay-150"></span>
            <span className="animate-wave-dot bg-primary w-2 h-2 rounded-full animation-delay-300"></span>
          </div>
        )}
      </ul>
    </div>
  );
}
