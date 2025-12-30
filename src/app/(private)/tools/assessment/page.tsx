import clsx from "clsx";
import { ClipboardList } from "lucide-react";
import { ASSESSMENT_STEPS } from "@/routes/tools/assessment/model/assessmentStep";
import AssessmentSelect from "@/routes/tools/assessment/ui/AssessmentSelect/AssessmentSelect";
import AssessmentInstructionReview from "@/routes/tools/assessment/ui/AssessmentInstructionReview/AssessmentInstructionReview";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function AssessmentToolPage(props: {
  searchParams: SearchParams;
}) {
  const searchParams = await props.searchParams;
  const currentStep = searchParams.step ?? "1";

  return (
    <>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex items-center gap-2">
          <ClipboardList className="text-gray-700" />
          <div className="text-gray-900 text-[20px] font-bold">
            수행평가 작성 도구
          </div>
        </div>
        <p className="text-gray-700 text-sm">
          수행평가 지시문을 업로드하면 AI가 핵심 요구사항을 분석해 기본 구조와
          초안을 바로 만들어줘요.
          <br />
          시간 많이 걸리던 수행평가, 이제 빠르고 쉽게 끝내보세요.
        </p>
      </div>
      <ul className="sticky top-16 flex gap-4 px-8 py-4 bg-white border-b border-b-gray-200 z-20">
        {ASSESSMENT_STEPS.map((s) => {
          const step = s.id.split("-")[1];
          return (
            <li
              key={s.id}
              className={clsx("flex items-center gap-2 h-12 px-4 rounded-lg", {
                "bg-primary/10": currentStep === step,
              })}
            >
              <div
                className={clsx(
                  "flex-center size-6 text-white text-sm rounded-full",
                  {
                    "bg-primary": currentStep === step,
                    "bg-gray-300": currentStep !== step,
                  }
                )}
              >
                {step}
              </div>
              <div
                className={clsx(" font-semibold", {
                  "text-gray-700": currentStep === step,
                  "text-gray-300": currentStep !== step,
                })}
              >
                {s.label}
              </div>
            </li>
          );
        })}
      </ul>
      {currentStep === "1" && <AssessmentSelect />}
      {currentStep === "2" && <AssessmentInstructionReview />}
    </>
  );
}
