"use client";

import { useState } from "react";
import { AssessmentSchema } from "../model/assessmentSchema";
import { Sparkles } from "lucide-react";
import TextInput from "@/shared/ui/form/TextInput";
import TextareaInput from "@/shared/ui/form/TextareaInput";
import TagInput from "@/shared/ui/form/TagInput";

export default function AssessmentInputPanel() {
  const [inputValue, setInputValue] = useState<AssessmentSchema>({
    title: "",
    subTitle: "",
    purpose: "",
    keywords: [],
  });

  const updateInputValue = (name: string, value: string) => {
    if (name === "keywords") {
      if (inputValue.keywords.includes(value)) return;
      setInputValue((prev) => ({
        ...prev,
        keywords: [...prev.keywords, value],
      }));
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }
  };

  const deleteKeyword = (keyword: string) => {
    const deletedKeywords = inputValue.keywords.filter((k) => k !== keyword);
    setInputValue({ ...inputValue, keywords: deletedKeywords });
  };

  return (
    <div className="w-96 h-[calc(100vh-192px)] border border-gray-200 rounded-lg overflow-y-auto container-scroll">
      <div className="sticky top-0 h-4 bg-white"></div>
      <div className="flex flex-col gap-8 p-4">
        <TextInput
          name="title"
          label="제목"
          description=""
          placeholder="ex) 인공지능이 바꿀 미래 사회"
          value={inputValue.title}
          updateInputValue={updateInputValue}
        />
        <TextInput
          name="subTitle"
          label="소제목"
          description="제목을 조금 더 자세히 설명하고 싶다면 적어 주세요."
          placeholder="ex) 학교 교육에서의 AI 활용"
          value={inputValue.subTitle}
          updateInputValue={updateInputValue}
        />
        <TextareaInput
          name="purpose"
          label="목적"
          description="수행평가에서 무엇을 조사하거나 설명해야 하는지 적어 주세요."
          placeholder="ex) AI가 우리 생활에 미치는 좋은 점과 나쁜 점을 조사하기"
          value={inputValue.purpose}
          updateInputValue={updateInputValue}
        />
        <TagInput
          name="keywords"
          label="핵심 키워드"
          description="수행평가와 관련된 중요한 단어를 적어 주세요."
          placeholder="ex) 인공지능, 미래 직업, 기술 발전"
          keywords={inputValue.keywords}
          updateInputValue={updateInputValue}
          deleteKeyword={deleteKeyword}
        />
      </div>
      <div className="sticky bottom-0 p-4 bg-white rounded-b-lg">
        <div className="flex-center gap-2 w-full h-10 bg-primary rounded-lg text-white text-sm hover:cursor-pointer">
          <Sparkles size={18} />
          <div>자동 완성</div>
        </div>
      </div>
    </div>
  );
}
