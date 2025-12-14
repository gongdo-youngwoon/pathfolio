import clsx from "clsx";
import { useState } from "react";
import { FileCheck, FileUp, LoaderCircle } from "lucide-react";
import { formatFileSize } from "@/shared/utils/formatFileSize";
import DotWaveLoading from "@/shared/ui/loading/DotWaveLoading";

interface AssessmentInstructionUploaderProps {
  isLoading: boolean;
  handleUpload: () => void;
}

export default function AssessmentInstructionUploader({
  isLoading,
  handleUpload,
}: AssessmentInstructionUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (!file) return;
    setFile(file);
    handleUpload();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFile(file);
    handleUpload();
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={clsx(
          "h-48 border border-dashed rounded-lg transition-colors",
          isDragging
            ? "bg-hover border-primary"
            : "border-gray-200 hover:bg-hover hover:border-primary"
        )}
      >
        <label
          htmlFor="file-upload"
          className="flex-center flex-col w-full h-full cursor-pointer"
        >
          <div className="flex-center size-11 mb-5 bg-primary/10 rounded-full">
            <FileUp className="text-primary" />
          </div>
          <div className="mb-1 text-gray-900 font-bold">
            수행평가 지시문을 업로드해 주세요.
          </div>
          <div className="text-gray-500 text-sm">
            파일을 선택하거나 드래그 앤 드롭으로 PDF 파일 1개를 업로드할 수
            있어요.
          </div>
        </label>
        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {file && (
        <div className="flex items-center gap-2 h-14 px-4 bg-gray-100 rounded-lg text-sm">
          <div className="flex-center size-8 bg-white rounded-lg">
            {isLoading ? (
              <LoaderCircle className="text-primary animate-spin" />
            ) : (
              <FileCheck size={20} className="text-primary" />
            )}
          </div>
          <div className="text-gray-700">{file.name}</div>
          <div className="text-gray-400">
            {isLoading ? (
              <div className="flex items-center px-4">
                <div className="text-primary">
                  업로드한 파일에서 핵심 정보 추출 중
                </div>
                <DotWaveLoading size="size-1" />
              </div>
            ) : (
              formatFileSize(file.size)
            )}
          </div>
        </div>
      )}
    </div>
  );
}
