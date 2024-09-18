import HeroSection from "../shared/home-page/HeroSection";
import JobsOfTheDay from "../shared/home-page/JobsOfTheDay";
import PromotionSection from "../shared/home-page/PromotionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <JobsOfTheDay />
      <PromotionSection />
      {/* <JobsByLocation /> */}
    </>
  );
}
