import React from "react";
import FeatureBlock from "./FeatureBlock";

import tvImg from "../../assets/images/enjoy-tv.webp";
import devicesImg from "../../assets/images/watch-everywhere.webp";
import kidsImg from "../../assets/images/kids-profile.webp";
import downloadImg from "../../assets/images/download-shows.webp";

const FeatureSection = () => {
  return (
    <section>
      <FeatureBlock
        title="Enjoy on your TV"
        description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        image={tvImg}
      />
      <FeatureBlock
        title="Watch everywhere"
        description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        image={devicesImg}
        reverse
      />
      <FeatureBlock
        title="Create profiles for kids"
        description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        image={kidsImg}
      />
      <FeatureBlock
        title="Download your shows to watch offline"
        description="Watch on a plane, train, or submarine..."
        image={downloadImg}
        reverse
      />
    </section>
  );
};

export default FeatureSection;
