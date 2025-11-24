import AssessmentInputPanel from "@/routes/assessmentAssistant/ui/AssessmentInputPanel";

export default function AssessmentAssistantPage() {
  return (
    <div className="p-10">
      <div className="mb-5 text-gray-900 text-lg font-semibold">수행평가</div>
      <div className="flex">
        <AssessmentInputPanel />
        <div></div>
      </div>
    </div>
  );
}
