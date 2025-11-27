"use client";

import clsx from "clsx";
import { useState } from "react";
import { usePerformanceAssessmentStore } from "../model/usePerformanceAssessmentStore";
import { AssessmentSchema } from "../model/assessmentSchema";
import { LoaderCircle, Sparkles } from "lucide-react";
import SingleFileInput from "@/shared/ui/form/SingleFileInput";

export default function PerformanceAssessmentInputPanel() {
  const [inputValue, setInputValue] = useState<AssessmentSchema>({
    file: null,
  });
  const { isGenerating, generatePerformanceAssessment } =
    usePerformanceAssessmentStore((s) => s);
  const updateInputValue = (name: string, value: File | null) => {
    setInputValue({ ...inputValue, [name]: value });
  };

  const validateInput = () => {
    const fileCheck = Boolean(inputValue.file);
    if (fileCheck) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="flex flex-col w-96 h-[calc(100vh-128px)] border border-gray-200 rounded-lg overflow-y-auto container-scroll">
      <div className="sticky top-0 py-2 bg-white"></div>
      <div className="flex-1 flex flex-col gap-8 px-4 pb-4">
        <SingleFileInput
          label="수행평가 지시문 첨부"
          description=".pdf, .docx, .hwp 파일 1개(10MB 이하) 업로드 가능"
          value={inputValue.file}
          updateInputValue={updateInputValue}
        />
      </div>
      <div className="sticky bottom-0 flex items-center p-4 bg-white">
        <div
          className={clsx(
            "flex-center gap-2 w-full h-11 rounded-lg text-white text-sm",
            {
              "bg-primary hover:cursor-pointer": validateInput(),
              "bg-gray-200 hover:cursor-not-allowed": !validateInput(),
            }
          )}
          onClick={() => {
            if (validateInput()) {
              generatePerformanceAssessment();
            }
          }}
        >
          {isGenerating ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            <>
              <Sparkles size={18} />
              <div>자동 완성</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
