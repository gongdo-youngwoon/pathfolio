import { useState } from "react";
import { Calendar, ChevronRight, Ellipsis, Shapes } from "lucide-react";
import { AssessmentSchema } from "../../model/dummyAssessments";
import { ASSESSMENT_STATUS_MAP } from "../../model/assessmentStatusMap";
import ContextMenu from "@/shared/ui/overlay/ContextMenu";

interface AssessmentCardListItemProps {
  assessment: AssessmentSchema;
}

export default function AssessmentCardListItem({
  assessment,
}: AssessmentCardListItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <li className="flex flex-col justify-between h-56 p-4 border border-gray-200 rounded-2xl transition-default group hover:shadow-md">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center mb-1">
          <div className="flex gap-2 text-xs">
            <div className="flex-center h-6 px-2 bg-primary/10 rounded-lg text-primary">
              {assessment.subject}
            </div>
            <div
              className={`flex-center h-6 px-2 rounded-lg ${
                ASSESSMENT_STATUS_MAP[assessment.status].bgColor
              } ${ASSESSMENT_STATUS_MAP[assessment.status].textColor}`}
            >
              {ASSESSMENT_STATUS_MAP[assessment.status].label}
            </div>
          </div>
          <div className="relative">
            <div
              className="flex-center size-8 text-gray-500 rounded-lg transition-default hover:cursor-pointer hover:bg-hover hover:text-gray-700"
              onClick={handleOpen}
            >
              <Ellipsis size={20} />
            </div>
            {isOpen && (
              <ContextMenu
                options={[
                  { id: "delete", label: "삭제하기", onClick: () => {} },
                ]}
                handleClose={handleClose}
              />
            )}
          </div>
        </div>
        <div className="text-gray-700 font-semibold">{assessment.title}</div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Shapes size={16} />
          <div>유형 :</div>
          <div>{assessment.type}</div>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Calendar size={16} />
          <div>마감일 :</div>
          <div>{assessment.dueDate}</div>
        </div>
      </div>
      <div className="flex-center gap-1 pl-4 pr-2 h-10 bg-hover text-primary text-sm font-semibold rounded-xl hover:cursor-pointer">
        {ASSESSMENT_STATUS_MAP[assessment.status].buttonLabel}
      </div>
    </li>
  );
}
