interface PerformanceAssessmentDraftProps {
  content: string;
}

export default function PerformanceAssessmentDraft({
  content,
}: PerformanceAssessmentDraftProps) {
  return (
    <div className="whitespace-pre-line leading-relaxed text-gray-800 text-[15px]">
      {content}
    </div>
  );
}
