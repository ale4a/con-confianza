"use client";

import React, { useRef, useState } from "react";
// import CalculateLoan from "./CalculateLoan";
// import FreeCourses from "./FreeCourses";
import GetStarted from "./GetStarted";
import HeaderHome from "./HeaderHome";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";

// import InvestorInterest from "./InvestorInterest";

const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const scrollToSection = (index: number) => {
    const ref = sectionRefs[index]?.current;

    if (ref) {
      const currentScrollPosition = window.scrollY;
      const targetScrollPosition = ref.offsetTop;

      if (currentScrollPosition !== targetScrollPosition) {
        ref.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(index);
      } else {
        console.log("vuelve al principio", currentScrollPosition, targetScrollPosition);
      }
    }
  };
  return (
    <>
      <HeaderHome scrollToSection={scrollToSection} activeSection={activeSection} />
      <div ref={sectionRefs[0]}>
        <HeroSection />
      </div>
      <div ref={sectionRefs[1]}>
        <HowItWorks />
      </div>
      <div ref={sectionRefs[4]}>
        <GetStarted />
      </div>
      {/* <CalculateLoan /> */}
      <div ref={sectionRefs[2]}>{/* <FreeCourses /> */}</div>
      {/* <InvestorInterest /> */}
    </>
  );
};

export default Home;
