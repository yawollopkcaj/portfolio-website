import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/image_processing.png";
import rmtdevImg from "@/public/battery_case.webp";
import wordanalyticsImg from "@/public/autonomous_claw.jpeg";
import diagnosticsMode from "@/public/diagnostics_mode.png";
import gokart from "@/public/gokart.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Mechanical Team",
    location: "Vancouver, BC",
    description:
      "I worked as mechanical engineer for the UBC Supermileage engineering design team at the University of British Columbia.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Software Team",
    location: "Vancouver, BC",
    description:
      "I now work as a software engineer for the UBC Formula Electric engineering design team at the University of British Columbia. In this position, I work on the battery management system.",
      icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Diagnostics-Mode",
    description:
      "Designed and programmed a rapid data collection software for troubleshooting issues with the battery management system for the Formula Electric engineering design team.",
    tags: ["C/C++ (STM32)", "Git", "CAN", "SIL/HIL"],
    imageUrl: diagnosticsMode,
  },
  {
    title: "Image Processing Algorithm",
    description:
      "Developed algorithms for green-screen replacement and text alignment using Java and Discrete Fourier Transforms.",
    tags: ["Java", "Git", "JUnit", "InteliJ", "Gradle"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Autonomous Robotic Claw",
    description:
      "Designed and programmed an Arduino-based robotic claw for autonomous object handling.",
    tags: ["C (Arduino)", "Git", "SolidWorks", "Soldering"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Battery Case CAD",
    description:
      "3D modeled a battery case with a latchable lid to conform with comp regulations for the Supermileage engineering design team.",
    tags: ["SolidWorks", "CAD"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Battery-Powered Vehicle",
    description:
      "Engineered a system for a battery powered go-cart, achieving speeds upwards of 30 km/h.",
    tags: ["Welding", "Soldering", "Microsoft Office", "CAD"],
    imageUrl: gokart,
  },
] as const;

export const skillsData = [
  "Java",
  "C++",
  "C",
  "STM32",
  "Arduino",
  "Git",
  "CAN",
  "MATLAB",
  "NumPy",
  "Electronics",
  "Waterjet",
  "Tinkercad",
  "SolidWorks",
  "SIL/HIL",
  "Soldering",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
] as const;