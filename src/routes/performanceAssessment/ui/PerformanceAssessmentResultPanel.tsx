"use client";

import { ClipboardList } from "lucide-react";
import { usePerformanceAssessmentStore } from "../model/usePerformanceAssessmentStore";
import PerformanceAssessmentDraft from "./PerformanceAssessmentDraft";
import DotWaveLoading from "@/shared/ui/loading/DotWaveLoading";

export default function PerformanceAssessmentResultPanel() {
  const { isGenerating, loadingLogs, generatedDraft } =
    usePerformanceAssessmentStore((s) => s);

  return (
    <div className="flex-1 h-[calc(100vh-96px)] border border-gray-200 rounded-lg">
      {isGenerating ? (
        <ul className="flex flex-col items-center gap-3 py-10">
          {loadingLogs.map((log, i) => (
            <li
              key={i}
              className="flex items-center h-10 px-5 bg-hover-bg rounded-full text-sm text-gray-700 animate-pulse"
            >
              {log}
            </li>
          ))}
          <DotWaveLoading />
        </ul>
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
        <>
          <div className="flex items-center h-12 px-4 border-b border-b-gray-200">
            <div className="text-sm text-gray-700 font-semibold">
              수행평가 초안
            </div>
          </div>
          <div className="flex justify-center h-[calc(100vh-144px)] overflow-y-auto container-scroll">
            <PerformanceAssessmentDraft content={generatedDraft} />
          </div>
        </>
      )}
    </div>
  );
}
