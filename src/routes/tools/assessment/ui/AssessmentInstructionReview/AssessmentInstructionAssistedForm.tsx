import FormDropdown from "@/shared/ui/form/FormDropdown";
import TextInput from "@/shared/ui/form/TextInput";
import TextareaInput from "@/shared/ui/form/TextareaInput";
import {
  ASSESSMENT_TYPE_OPTIONS,
  GRADE_OPTIONS,
  SEMESTER_OPTIONS,
  SUBJECT_OPTIONS,
} from "../../model/assessmentFormOption";
import Checkbox from "@/shared/ui/form/Checkbox";
import AccordionWrapper from "@/shared/ui/wrapper/AccordionWrapper";

export default function AssessmentInstructionAssistedForm() {
  return (
    <div>
      <AccordionWrapper isOpen={true} label="기본 정보">
        <div className="flex gap-4">
          <FormDropdown
            width="w-40"
            label="학년"
            options={GRADE_OPTIONS}
            value="2학년"
          />
          <FormDropdown
            width="w-40"
            label="학기"
            options={SEMESTER_OPTIONS}
            value="1학기"
          />
          <FormDropdown
            width="w-48"
            label="교과"
            options={SUBJECT_OPTIONS}
            value="통합과학"
          />
        </div>
        <TextInput
          label="제목"
          name=""
          placeholder="수행평가 제목 입력"
          value="화학 결합의 과학적 원리를 이해하고 염화칼슘 제설제의 대체 물질 제안하기"
        />
        <TextareaInput
          label="설명"
          name=""
          placeholder="수행평가 설명 입력"
          value=""
        />
        <TextInput
          label="성취기준"
          name=""
          placeholder="성취기준 입력"
          value=""
        />
        <div className="flex flex-col gap-4 text-sm">
          <div className="text-gray-700">평가 유형</div>
          <ul className="grid grid-cols-6 gap-y-6">
            {ASSESSMENT_TYPE_OPTIONS.map((t) => {
              return (
                <li key={t.id} className="flex gap-2">
                  <Checkbox checked={false} handleClick={() => {}} />
                  <div className="text-gray-500">{t.label}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </AccordionWrapper>
    </div>
  );
}
