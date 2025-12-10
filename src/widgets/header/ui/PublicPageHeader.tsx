import MainLogo from "@/shared/ui/logo/MainLogo";

export default function PublicPageHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      <div className="flex justify-between items-center w-[1200px] h-20 mx-auto">
        <MainLogo iconSize={20} fontSize="text-xl" />
        <div className="flex gap-2 *:flex *:items-center *:h-8 *:px-4 *:border *:border-gray-200 *:rounded-lg text-sm text-gray-700">
          <div>로그인</div>
          <div>회원가입</div>
        </div>
      </div>
    </div>
  );
}
