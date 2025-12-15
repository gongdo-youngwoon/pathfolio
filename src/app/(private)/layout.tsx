import PrivatePageHeader from "@/widgets/header/ui/PrivatePageHeader";
import Sidebar from "@/widgets/sidebar/ui/Sidebar";
import PrivatePageWrapper from "../../shared/ui/wrapper/PrivatePageWrapper";
import SuccessAlert from "@/shared/ui/alert/SuccessAlert";
import DeleteDialog from "@/shared/ui/dialog/DeleteDialog";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PrivatePageHeader />
      <Sidebar />
      <PrivatePageWrapper>{children}</PrivatePageWrapper>
      <SuccessAlert />
      <DeleteDialog />
    </>
  );
}
