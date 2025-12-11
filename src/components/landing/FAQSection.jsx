import React, { useState } from "react";
import FAQItem from "./FAQItem";
import SignupCta from "./SignupCta";

const faqData = [
  {
    question: "What is Netflix?",
    answer:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, and more.",
  },
  {
    question: "How much does Netflix cost?",
    answer:
      "Watch Netflix on your smartphone, tablet, Smart TV, or laptop. Plans range depending on your region.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Netflix is flexible. There are no annoying contracts or commitments.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(index);
  };

  return (
    <section className="border-b-4 border-neutral-gray-800 py-20 ">
      <div className="flex flex-col items-center justify-center max-w-[1100px] mx-auto">
        <h2 className="title1 text-center mb-6">Frequently Asked Questions</h2>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
        <SignupCta className="mt-12" />
      </div>
    </section>
  );
};

export default FAQSection;
