"use client";

import clsx from "clsx";
import { nanoid } from "nanoid";
import { ChangeEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useChatStore } from "@/shared/store/useChatStore";
import { Mic, Paperclip, Send } from "lucide-react";

export default function HeroPromptInput() {
  const { setIsThinking, prependChatThread } = useChatStore((s) => s);
  const [isComposing, setIsComposing] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setTextareaValue(value);

    if (!textareaRef.current) return;

    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  const createChatThread = (initialMessage: string) => {
    const id = nanoid();
    const thread = {
      id,
      messages: [{ role: "user", content: initialMessage }],
      createdAt: Date.now(),
    };
    prependChatThread(thread);
    setIsThinking(true);
    router.push(`/c/${id}`);
  };

  return (
    <div className="mb-16 p-4 bg-white border border-gray-200 rounded-xl transition-default has-focus:border-primary has-focus:ring-2 has-focus:ring-primary-bg">
      <textarea
        ref={textareaRef}
        placeholder="무엇이든 물어보세요."
        className="w-full mb-3 text-gray-700 text-sm resize-none outline-none"
        rows={2}
        value={textareaValue}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && !isComposing) {
            e.preventDefault();

            if (textareaValue.length > 0) {
              createChatThread(textareaValue);
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
                createChatThread(textareaValue);
              }
            }}
          >
            <Send size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
