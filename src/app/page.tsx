import PublicPageHeader from "@/widgets/header/ui/PublicPageHeader";
import HeroSection from "@/routes/home/HeroSection";
import AgentCardList from "@/routes/home/AgentCardList";
import FixedBottomButton from "@/shared/ui/button/FixedBottomButton";
import UserCountHighlight from "@/routes/home/UserCountHighlight";

export default function Home() {
  return (
    <div className="w-[960px] mx-auto py-40">
      <PublicPageHeader />
      <HeroSection />
      <AgentCardList />
      <UserCountHighlight />
      <FixedBottomButton href="/signup" label="무료로 시작하기" />
    </div>
  );
}
