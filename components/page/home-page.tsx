import HeroSection from "../shared/home-page/HeroSection";
import JobsByLocation from "../shared/home-page/JobsByLocation";
import JobsOfTheDay from "../shared/home-page/JobsOfTheDay";
import PromotionSection from "../shared/home-page/PromotionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <JobsOfTheDay />
      <PromotionSection />
      <JobsByLocation />
    </>
  );
}
