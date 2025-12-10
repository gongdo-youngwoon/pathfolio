import Checkbox from "@/shared/ui/form/Checkbox";
import { TERM_AGREEMENT_LIST } from "../model/termsAgreementList";
import { ChevronRight } from "lucide-react";

export default function TermsAgreement() {
  return (
    <div>
      <div className="flex items-center gap-4 h-14 mb-2 px-4 bg-hover-bg rounded-lg">
        <Checkbox checked={false} handleClick={() => {}} />
        <div className="text-gray-700">전체 약관 동의</div>
      </div>
      <ul>
        {TERM_AGREEMENT_LIST.map((t) => {
          return (
            <li
              key={t.id}
              className="flex justify-between items-center px-4 h-12"
            >
              <div className="flex gap-4">
                <Checkbox checked={false} handleClick={() => {}} />
                <div className="text-gray-500">{t.label}</div>
              </div>
              {t.hasDetail && (
                <div className="flex-center size-5 bg-hover-bg rounded-full hover:cursor-pointer">
                  <ChevronRight size={16} className="text-gray-700" />
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
