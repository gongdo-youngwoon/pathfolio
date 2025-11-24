"use client";

import clsx from "clsx";
import { useDeleteStore } from "@/shared/store/useDeleteStore";
import { CircleAlert, X } from "lucide-react";

export default function DeleteDialog() {
  const { isDeleteDialogOpen, closeDeleteDialog, proceedDelete } =
    useDeleteStore((s) => s);
  return (
    <div
      className={clsx("fixed inset-0 bg-gray-700/10 z-10", {
        "flex-center": isDeleteDialogOpen,
        hidden: !isDeleteDialogOpen,
      })}
    >
      <div className="relative flex-center flex-col w-80 py-6 bg-white rounded-lg shadow-md">
        <div className="absolute top-2 right-2 flex-center size-7 rounded-full text-gray-400 transition-default hover:cursor-pointer hover:bg-hover-bg hover:text-gray-500">
          <X size={20} onClick={closeDeleteDialog} />
        </div>
        <CircleAlert size={48} className="mb-4 text-error" />
        <div className="mb-1 text-lg text-gray-700 font-bold">
          정말로 삭제하시겠습니까?
        </div>
        <div className="mb-6 text-sm text-gray-500">
          삭제한 내용은 복구할 수 없습니다.
        </div>
        <div className="flex gap-2 text-sm">
          <div
            className="flex-center w-20 h-10 border border-gray-200 text-gray-700 rounded-lg hover:cursor-pointer"
            onClick={closeDeleteDialog}
          >
            취소
          </div>
          <div
            className="flex-center w-20 h-10 bg-error text-white rounded-lg hover:cursor-pointer"
            onClick={proceedDelete}
          >
            삭제
          </div>
        </div>
      </div>
    </div>
  );
}
