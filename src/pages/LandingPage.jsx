import React from "react";

import LandingHero from "../components/landing/LandingHero";
import PromoBanner from "../components/landing/PromoBanner";
import FeatureSection from "../components/landing/FeatureSection";
import FAQSection from "../components/landing/FAQSection";

const LandingPage = () => {
  return (
    <>
      <LandingHero />
      <PromoBanner />
      <FeatureSection />
      <FAQSection />
    </>
  );
};

export default LandingPage;
