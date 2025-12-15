"use client";

import { useState } from "react";
import AssessmentInstructionAssistedForm from "./AssessmentInstructionAssistedForm";
import AssessmentInstructionUploader from "./AssessmentInstructionUploader";
import AssessmentInstructionParsingLoader from "./AssessmentInstructionParsingLoader";
import AssessmentStepNavigation from "../AssessmentStepNavigation";

export default function AssessmentInstructionReview() {
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setIsLoading(true);
    setFile(file);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col gap-8 pt-8 px-8 pb-28">
      <AssessmentInstructionUploader
        isLoading={isLoading}
        file={file}
        handleUpload={handleUpload}
      />
      {isLoading ? (
        <AssessmentInstructionParsingLoader />
      ) : (
        file && <AssessmentInstructionAssistedForm />
      )}
      <AssessmentStepNavigation isNextValid={false} />
    </div>
  );
}
