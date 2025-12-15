"use client";

import clsx from "clsx";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { SquarePen } from "lucide-react";

import { DUMMY_ASSESSMENTS } from "../../model/dummyAssessments";
import AssessmentCardListItem from "./AssessmentCardListItem";
import { ASSESSMENT_STATUS_TABS } from "../../model/assessmentStatus";

export default function AssessmentSelect() {
  const [currentTab, setCurrentTab] = useState(ASSESSMENT_STATUS_TABS[0]);
  const pathname = usePathname();
  const router = useRouter();
  const assessments = DUMMY_ASSESSMENTS.filter((a) =>
    currentTab.statuses.includes(a.status)
  );

  return (
    <div className="flex flex-col gap-4 p-8">
      <div className="text-gray-900 font-semibold">최근 만든 수행평가</div>
      <div className="flex justify-between items-center">
        <ul className="flex gap-2">
          {ASSESSMENT_STATUS_TABS.map((t) => {
            return (
              <li
                key={t.id}
                className={clsx(
                  "flex-center h-9 px-4 border rounded-full text-sm hover:cursor-pointer",
                  {
                    "border-primary bg-primary text-white":
                      currentTab.id === t.id,
                    "border-gray-200 text-gray-700": currentTab.id !== t.id,
                  }
                )}
                onClick={() => setCurrentTab(t)}
              >
                {t.label}
              </li>
            );
          })}
        </ul>
        <div
          className="flex-center w-44 h-12 gap-2 bg-primary text-white rounded-lg hover:cursor-pointer"
          onClick={() => router.push(`${pathname}?step=2`)}
        >
          <SquarePen size={20} />
          <div className="text-sm">새 수행평가 만들기</div>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-4">
        {assessments.map((a) => {
          return <AssessmentCardListItem key={a.id} assessment={a} />;
        })}
      </ul>
    </div>
  );
}
