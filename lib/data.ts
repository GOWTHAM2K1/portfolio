import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import bilwa from "@/public/bilwa.png";
import spoot from "@/public/spoot.png";
import chat from "@/public/chat.png";



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
    title: "Spotify-Clone",
    description:
      "Built a Spotify clone with almost all functionalities of Spotify and the app uses supabase as storage and allows user to upload their song. ",
    tags: ["Next JS","Tailwind","Typescript","Javascript","React", "Supabase"],
    imageUrl: spoot,
    websiteUrl:"https://spotify-clone-six-gray.vercel.app/",
  },
  {
    title: "newsApp",
    description:
      "Built an news app which provides up to data news to the users this app uses news api to fetch data and provide the news.",
    tags: ["React", "Thunder client", "Javascript", "Bootstrap",],
    imageUrl: rmtdevImg,
    websiteUrl:"https://github.com/GOWTHAM2K1",
  },
  {
    title: "myNoteBook",
    description:
      "This project allows the user to store his diary entries in it, it has login functionality to it.Built front end and backend of the component using mern stack. ",
    tags: ["React", "Express", "MongoDB", "JWT", "Bootstrap","Node"],
    imageUrl: corpcommentImg,
    websiteUrl:"https://github.com/GOWTHAM2K1",
  },
  {
    title: "Chat-Bot-Builder",
    description:
      "A web apps which help the organizations to convert the audio files into a conversationals text which can be used to train custom chat bots.",
    tags: ["Next JS","Tailwind","Typescript","Javascript","Openai api", "hugging face api"],
    imageUrl: chat,
    websiteUrl:"https://dataset-for-chatbots-builder.vercel.app/",
  },
  {
    title: "Shopping app(bilwa)",
    description:
      "I am currently building a website for buying edible oils from the vendor.",
    tags: ["Wordpress", "Woocommerce"],
    imageUrl: bilwa,
    websiteUrl:"https://bilwawoodpressedoils.com",
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
  "Docker"

] as const;
