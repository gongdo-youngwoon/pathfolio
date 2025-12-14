"use client";

import { useState } from "react";
import AssessmentInstructionAssistedForm from "./AssessmentInstructionAssistedForm";
import AssessmentInstructionUploader from "./AssessmentInstructionUploader";
import AssessmentInstructionParsingLoader from "./AssessmentInstructionParsingLoader";

export default function AssessmentInstructionReview() {
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  };
  return (
    <div className="flex flex-col gap-8 p-8">
      <AssessmentInstructionUploader
        isLoading={isLoading}
        handleUpload={handleUpload}
      />
      {isLoading ? (
        <AssessmentInstructionParsingLoader />
      ) : (
        <AssessmentInstructionAssistedForm />
      )}
    </div>
  );
}
