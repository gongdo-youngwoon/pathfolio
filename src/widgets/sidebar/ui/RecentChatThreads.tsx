import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useChatStore } from "@/shared/store/useChatStore";
import { MessagesSquare, Trash2 } from "lucide-react";
import { useDeleteStore } from "@/shared/store/useDeleteStore";

export default function RecentChatThreads() {
  const { chatThreads, initChatThreads, removeChatThread } = useChatStore(
    (s) => s
  );
  const { openDeleteDialog } = useDeleteStore((s) => s);
  const router = useRouter();

  useEffect(() => {
    initChatThreads();
  }, [initChatThreads]);

  if (chatThreads.length === 0) {
    return null;
  }

  return (
    <div className="pt-4 border-t border-t-gray-200">
      <div className="mb-1 px-2 text-xs text-gray-700 font-bold">최근 질문</div>
      <ul className="flex flex-col gap-1">
        {chatThreads.map((thread) => {
          return (
            <li
              key={thread.id}
              className="relative group h-9 rounded-lg hover:cursor-pointer hover:bg-hover-bg"
            >
              <div
                className="absolute inset-0 flex items-center gap-2 px-2 text-gray-500 group-hover:text-gray-700"
                onClick={() => router.push(`/c/${thread.id}`)}
              >
                <MessagesSquare size={16} className="shrink-0" />
                <div className="w-44 text-sm truncate">
                  {thread.messages[0].content}
                </div>
              </div>
              <Trash2
                size={16}
                className="absolute top-2.5 right-2 text-error hidden group-hover:block hover:cursor-pointer"
                onClick={() => {
                  openDeleteDialog(() => removeChatThread(thread.id));
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
