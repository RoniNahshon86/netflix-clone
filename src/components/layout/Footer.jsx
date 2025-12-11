import React from "react";
import { Link } from "react-router-dom";

const footerLinks = [
  {
    text: "FAQ",
    href: "#",
  },
  {
    text: "Investor Relations",
    href: "#",
  },
  {
    text: "Buy Gift Cards",
    href: "#",
  },
  {
    text: "Cookie Preferences",
    href: "#",
  },
  {
    text: "Legal Notices",
    href: "#",
  },
  {
    text: "Help Center",
    href: "#",
  },
  {
    text: "Jobs",
    href: "#",
  },
  {
    text: "Ways to Watch",
    href: "#",
  },
  {
    text: "Corporate Information",
    href: "#",
  },
  {
    text: "Only on Netflix",
    href: "#",
  },
  {
    text: "Account",
    href: "#",
  },
  {
    text: "Netflix Shop",
    href: "#",
  },
  {
    text: "Terms of Use",
    href: "#",
  },
  {
    text: "Contact Us",
    href: "#",
  },
  {
    text: "Do Not Sell or Share Personal Information",
    href: "#",
  },
  {
    text: "Media Center",
    href: "#",
  },
  {
    text: "Redeem Gift Cards",
    href: "#",
  },
  {
    text: "Privacy",
    href: "#",
  },
  {
    text: "Speed Test",
    href: "#",
  },
  {
    text: "Ad Choices",
    href: "#",
  },
];

const Footer = () => {
  return (
    <footer className="max-w-[90vw] mx-auto py-16 px-4">
      <nav>
        <ul className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-4">
          {footerLinks.map((link) => (
            <li key={link.text}>
              <Link
                to={link.href}
                className="text-neutral-gray-100 text-sm hover:underline hover:text-primary-white transition duration-300"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
