import PerformanceAssessmentInputPanel from "@/routes/performanceAssessment/ui/PerformanceAssessmentInputPanel";
import PerformanceAssessmentResultPanel from "@/routes/performanceAssessment/ui/PerformanceAssessmentResultPanel";

export default function PerformanceAssessmentPage() {
  return (
    <div className="flex gap-4 p-8">
      <PerformanceAssessmentInputPanel />
      <PerformanceAssessmentResultPanel />
    </div>
  );
}
