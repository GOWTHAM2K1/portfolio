import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


export const links = [
  {
    name: "Home",
    hash: "#home"
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
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "X-9.6 CGPA",
    location: "CBSE",
    description:
      "Sri Siddaganga Higher Primary School,Bangalore                                 ",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "PUC-84.6 percentage",
    location: "KSB",
    description:
      "Mahesh Pu College,Bangalore                        ",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "BE-8.83 CGPA",
    location: "VTU",
    description:
      "Dr.Ambedkar Institute of Technology, Bangalore                                  ",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "myNoteBook",
    description:
      "This project allows the user to store his diary entries in it, it has login functionality to it.Built front end and backend of the component using mern stack. ",
    tags: ["React", "Express", "MongoDB", "JWT", "Bootstrap","Node"],
    imageUrl: corpcommentImg,
  },
  {
    title: "newsApp",
    description:
      "Built an news app which provides up to data news to the users this app uses news api to fetch data and provide the news.",
    tags: ["React", "Thunder client", "Javascript", "Bootstrap",],
    imageUrl: rmtdevImg,
  },
  {
    title: "Shopping app",
    description:
      "I am currently building a website for buying edible oils from the vendor.",
    tags: ["React", "Express", "Mongo", "Tailwind", "Node"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",

] as const;
