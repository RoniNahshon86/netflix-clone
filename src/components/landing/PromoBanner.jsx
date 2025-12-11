import React from "react";
import { Link } from "react-router-dom";

import promoImg from "../../assets/images/promo-banner.webp";
import ArrowRightNarrow from "../../assets/icons/ArrowRightNarrow.svg?react";

const PromoBanner = () => {
  return (
    <section className="px-20">
      <div
        // TODO: gradirnt and border radius not working
        style={{
          background:
            "linear-gradient(0deg, rgba(14, 27, 79, 0.20) 0%, rgba(14, 27, 79, 0.20) 100%), radial-gradient(2368.63% 75.91% at 32.07% -523.61%, rgba(255, 153, 0, 0.60) 0%, rgba(229, 9, 20, 0.60) 14.34%, rgba(14, 27, 79, 0.60) 77%, rgba(0, 4, 19, 0.60) 100%)",
          boxShadow: "0 -8px 50px 25px rgba(0, 0, 0, 0.50)",
        }}
        className="flex items-center justify-center py-6 rounded-sm gap-8"
      >
        <img src={promoImg} alt="Promo banner" className="w-25 h-25" />
        <div className="flex flex-col gap-2 text-primary-white">
          <h2 className="title2">The Netflix you love for just $6.99.</h2>
          <p>Get the Standard with ads plan.</p>
          <Link
            to="/"
            className="flex items-center gap-2 text-secondary-blue-200 underline"
          >
            <span>Learn More</span>
            <ArrowRightNarrow className="w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
