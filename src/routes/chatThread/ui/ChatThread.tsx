"use client";

import clsx from "clsx";
import { useEffect } from "react";
import { useChatStore } from "@/shared/store/useChatStore";
import { getTestResponse } from "@/shared/utils/getTestResponse";
import {
  Copy,
  Ellipsis,
  RefreshCw,
  ThumbsDown,
  ThumbsUp,
  Upload,
} from "lucide-react";

interface ChatThreadProps {
  id: string;
}

export default function ChatThread({ id }: ChatThreadProps) {
  const { isThinking, setIsThinking, chatThreads, addMessageToThread } =
    useChatStore((s) => s);
  const chatThread = chatThreads.find((t) => t.id === id);

  useEffect(() => {
    const lastMessage = chatThread?.messages.at(-1);

    // 유저 메시지가 없거나 마지막 메시지가 assistant면 아무것도 안함
    if (!lastMessage || lastMessage.role !== "user") return;

    // 2초 후 assistant 메시지 추가 + 생각중 해제
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
                "self-end max-w-[480px] p-4 bg-hover-bg rounded-lg":
                  message.role === "user",
              })}
            >
              <div className="leading-7 whitespace-pre-wrap">
                {message.content}
              </div>
              {message.role === "assistant" && (
                <div className="flex items-center gap-3 h-14 text-gray-500">
                  <Copy size={18} />
                  <ThumbsUp size={18} />
                  <ThumbsDown size={18} />
                  <Upload size={18} />
                  <RefreshCw size={18} />
                  <Ellipsis size={18} />
                </div>
              )}
            </li>
          );
        })}
        {isThinking && (
          <li className="self-start flex-center gap-1 items-end p-4 bg-hover-bg rounded-lg">
            <span className="animate-wave-dot bg-primary w-2 h-2 rounded-full"></span>
            <span className="animate-wave-dot bg-primary w-2 h-2 rounded-full animation-delay-150"></span>
            <span className="animate-wave-dot bg-primary w-2 h-2 rounded-full animation-delay-300"></span>
          </li>
        )}
      </ul>
    </div>
  );
}
