import { FileUp } from "lucide-react";

export default function AssessmentInstructionUploader() {
  return (
    <div className="h-48 border border-gray-200 border-dashed rounded-lg hover:cursor-pointer hover:bg-hover hover:border-primary">
      <label
        htmlFor="file-upload"
        className="flex-center flex-col w-full h-full"
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
      <input className="hidden" id="file-upload" type="file" />
    </div>
  );
}
