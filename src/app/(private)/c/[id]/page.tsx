import ChatThread from "@/routes/chatThread/ui/ChatThread";
import ChatThreadInput from "@/routes/chatThread/ui/ChatThreadInput";

export default async function ChatThreadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-[824px] mx-auto py-16">
      <ChatThread id={id} />
      <ChatThreadInput id={id} />
    </div>
  );
}
