import React from "react";

import SignupCta from "./SignupCta";

import homeHeroBg from "../../assets/images/home-hero-bg.webp";

const LandingHero = () => {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.60) 50%, #000 100%), url(${homeHeroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-dvh flex flex-col gap-8 justify-center items-center text-primary-white"
    >
      <div className="flex flex-col items-center justify-center gap-2.5">
        <h1 className="title1">Unlimited movies, TV shows, and more</h1>
        <p className="title2">Watch anywhere. Cancel anytime.</p>
      </div>
      <SignupCta />
    </section>
  );
};

export default LandingHero;
