"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // Use the ref from the custom hook for observing the section in view
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        As a student at the University of British Columbia enrolled in{" "}
        <span className="font-medium">Engineering Physics</span>, I decided to pursue my
        passion for software construction and robotics. I am a member of the Software team on the{" "}
        <span className="font-medium">UBC Formula Electric</span> engineering design team.{" "}
        <span className="italic">My favorite part of engineering</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core skills include{" "}
        <span className="font-medium">
          Java, C/C++, Git, and Electronics
        </span>
        . I am also familiar with SolidWorks and MATLAB. I am always eager to
        learn new technologies. Currently, I am looking for a{" "}
        <span className="font-medium">full-time position</span> in January for a 4-month engineering co-op.
      </p>

      <p>
        <span className="italic">When I&apos;m not in class</span>, I enjoy skiing at Whistler Blackcomb, hiking with my dog, 
        and mountain biking on the North Shore mountains of Vancouver. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. At the moment, I am diving into{" "}
        <span className="font-medium">battery management systems and high-voltage charging</span>.
      </p>
    </motion.section>
  );
}
