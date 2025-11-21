import { create } from "zustand";

export interface ChatTreadSchema {
  id: string;
  messages: { role: string; content: string }[];
  createdAt: number;
}

type SidebarState = {
  chatThreads: ChatTreadSchema[];
};

type SidebarActions = {
  prependChatThread: (thread: ChatTreadSchema) => void;
  initChatThreads: () => void;
  removeChatThread: (id: string) => void;
  addMessageToThread: (
    threadId: string,
    message: { role: string; content: string }
  ) => void;
};

export const useChatStore = create<SidebarState & SidebarActions>((set) => ({
  chatThreads: [],

  // 1) prepend
  prependChatThread: (thread) =>
    set((state) => {
      const updated = [thread, ...state.chatThreads];
      localStorage.setItem("chatThreads", JSON.stringify(updated));
      return { chatThreads: updated };
    }),

  // 2) init
  initChatThreads: () =>
    set(() => {
      const saved = JSON.parse(localStorage.getItem("chatThreads") || "[]");
      return { chatThreads: saved };
    }),

  // 3) thread 삭제
  removeChatThread: (id) =>
    set((state) => {
      const updated = state.chatThreads.filter((t) => t.id !== id);
      localStorage.setItem("chatThreads", JSON.stringify(updated));
      return { chatThreads: updated };
    }),

  // 4) 특정 Thread 에 메시지 추가
  addMessageToThread: (threadId, message) =>
    set((state) => {
      const updated = state.chatThreads.map((t) =>
        t.id === threadId ? { ...t, messages: [...t.messages, message] } : t
      );

      localStorage.setItem("chatThreads", JSON.stringify(updated));
      return { chatThreads: updated };
    }),
}));
