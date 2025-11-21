"use client";

import clsx from "clsx";
import { ChangeEvent, useRef, useState } from "react";
import { useChatStore } from "@/shared/store/useChatStore";
import { useSidebarStore } from "@/shared/store/useSidebarStore";
import { Mic, Paperclip, Send } from "lucide-react";

interface ChatThreadInputProps {
  id: string;
}

export default function ChatThreadInput({ id }: ChatThreadInputProps) {
  const sidebarOpen = useSidebarStore((s) => s.sidebarOpen);
  const { addMessageToThread } = useChatStore((s) => s);
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const isRunningRef = useRef(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTextareaValue(value);

    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const sendUserMessage = () => {
    console.log(1);
    const message = { role: "user", content: textareaValue };

    addMessageToThread(id, message);
    setTextareaValue("");

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={clsx("fixed bottom-0 right-0 bg-white pb-10", {
        "left-64": sidebarOpen,
        "left-[52px]": !sidebarOpen,
      })}
    >
      <div className="w-[824px] mx-auto p-4 bg-white border border-gray-200 rounded-xl transition-default has-focus:border-primary has-focus:ring-2 has-focus:ring-primary-bg">
        <textarea
          ref={textareaRef}
          placeholder="무엇이든 물어보세요."
          className="w-full mb-3 text-gray-700 text-sm resize-none outline-none"
          rows={2}
          value={textareaValue}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              if (textareaValue.length > 0) {
                sendUserMessage();
              }
            }
          }}
        />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 text-gray-700 *:size-9 *:border *:border-gray-200 *:rounded-full">
            <div className="flex-center hover:cursor-pointer">
              <Paperclip size={18} />
            </div>
            <div className="flex-center hover:cursor-pointer">
              <Mic size={18} />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-primary text-sm font-bold underline">
              Pro로 업그레이드
            </div>
            <div
              className={clsx("flex-center size-9 text-white rounded-full", {
                "bg-gray-200 hover:cursor-not-allowed":
                  textareaValue.length === 0,
                "bg-primary hover:cursor-pointer": textareaValue.length > 0,
              })}
              onClick={() => {
                if (textareaValue.length > 0) {
                  sendUserMessage();
                }
              }}
            >
              <Send size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
