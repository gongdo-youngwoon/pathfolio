import { create } from "zustand";

interface DeleteState {
  isDeleteDialogOpen: boolean;
  onDelete?: () => void; // 실제 삭제 함수
}

interface DeleteActions {
  openDeleteDialog: (deleteFn: () => void) => void; // 다이얼로그 열 때 삭제 함수 전달
  closeDeleteDialog: () => void;
  proceedDelete: () => void; // 삭제 진행
}

export const useDeleteStore = create<DeleteState & DeleteActions>(
  (set, get) => ({
    isDeleteDialogOpen: false,
    onDelete: undefined,

    // 다이얼로그 열기 + 삭제 함수 지정
    openDeleteDialog: (deleteFn) =>
      set({ isDeleteDialogOpen: true, onDelete: deleteFn }),

    // 다이얼로그 닫기
    closeDeleteDialog: () =>
      set({ isDeleteDialogOpen: false, onDelete: undefined }),

    // 실제 삭제 진행
    proceedDelete: () => {
      const { onDelete } = get();
      if (onDelete) onDelete(); // 전달된 삭제 함수 실행
      set({ isDeleteDialogOpen: false, onDelete: undefined }); // 다이얼로그 닫기
    },
  })
);
