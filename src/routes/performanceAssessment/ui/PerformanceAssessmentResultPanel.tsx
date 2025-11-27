"use client";

import { ClipboardList } from "lucide-react";
import { usePerformanceAssessmentStore } from "../model/usePerformanceAssessmentStore";
import PerformanceAssessmentDraft from "./PerformanceAssessmentDraft";

export default function PerformanceAssessmentResultPanel() {
  const { isGenerating, generatedDraft } = usePerformanceAssessmentStore(
    (s) => s
  );

  return (
    <div className="flex-1 h-[calc(100vh-128px)] border border-gray-200 rounded-lg">
      {isGenerating ? (
        <div className="flex flex-col items-center gap-8 w-full h-full pt-8">
          <div className="flex flex-col gap-1 w-[500px] *:h-5 *:bg-gray-200 *:rounded-md *:animate-pulse">
            <div className="w-60" />
            <div className="w-full" />
            <div className="w-full" />
            <div className="w-full" />
            <div className="w-96" />
          </div>
          <div className="flex flex-col gap-1 w-[500px] *:h-5 *:bg-gray-200 *:rounded-md *:animate-pulse">
            <div className="w-60" />
            <div className="w-full" />
            <div className="w-full" />
            <div className="w-full" />
            <div className="w-96" />
          </div>
        </div>
      ) : !generatedDraft ? (
        <div className="flex-center flex-col gap-4 w-full h-full">
          <div className="flex-center size-12 bg-primary rounded-lg text-white">
            <ClipboardList size={28} />
          </div>
          <div className="text-sm text-gray-700 font-semibold">
            간단한 입력으로 수행평가 초안을 작성해 드려요!
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center h-10 px-4 border-b border-b-gray-200">
            <div className="text-sm text-gray-700 font-semibold">
              수행평가 초안
            </div>
          </div>
          <PerformanceAssessmentDraft content={generatedDraft} />
        </div>
      )}
    </div>
  );
}
