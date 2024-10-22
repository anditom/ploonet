import HomePage from "@/components/pages/HomePage";
import Header from "@/components/organisms/header";
import HeroSection from "@/components/organisms/HeroSection";
import FeatureSection from "@/components/organisms/FeatureSection";
import PreviousWorks from "@/components/organisms/PreviousWorks";
import MakingProcess from "@/components/organisms/MakingProcess";
import VideoInquiryForm from "@/components/organisms/VideoInquiryForm";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <PreviousWorks />
      <MakingProcess />
      <VideoInquiryForm />
    </>
  );
}
