import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDeleteStore } from "@/shared/store/useDeleteStore";
import { useMutation } from "@tanstack/react-query";
import { useAlertStore } from "@/shared/store/useAlertStore";
import { useChatStore } from "@/shared/store/useChatStore";
import { MessagesSquare, Trash2 } from "lucide-react";

export default function RecentChatThreads() {
  const { chatThreads, initChatThreads, removeChatThread } = useChatStore(
    (s) => s
  );
  const { openDeleteDialog } = useDeleteStore((s) => s);
  const { showSuccessAlert } = useAlertStore((s) => s);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    initChatThreads();
  }, [initChatThreads]);

  const { mutate } = useMutation({
    mutationFn: async (threadId: string) => removeChatThread(threadId),
    onSuccess: (_data, threadId) => {
      showSuccessAlert("정상적으로 삭제되었습니다.");
      if (threadId === id) router.push("/");
    },
  });

  const handleMutate = (threadId: string) => {
    mutate(threadId);
  };

  if (chatThreads.length === 0) return null;

  return (
    <div className="pt-6 px-2">
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
                <div className="w-40 text-sm truncate">
                  {thread.messages[0].content}
                </div>
              </div>
              <Trash2
                size={16}
                className="absolute top-2.5 right-2 text-error hidden group-hover:block hover:cursor-pointer"
                onClick={() => {
                  openDeleteDialog(() => handleMutate(thread.id));
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
