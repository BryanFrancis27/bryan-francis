import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava, FaDatabase, FaNode } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image7 from "../assets/project7.jpeg";
import image8 from "../assets/project8.jpeg";


export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Bryan Encarnacion",
  info: "A versatile full-stack developer blending technical expertise with creative graphic design skills.",
};

export const ABOUT = {
  name: "Bryan Francis O. Encarnacion",
  age: 19,
  degree: "BSIT-Software Engineering",
  languages: ["English", "Tagalog", "Cebuano"],
  email: "bryanfrancis1027@gmail.com",
  location: "Cebu City, Philippines",
  text1: "I create dynamic responsive websites that blend creativity with efficiency",
  text2: "Hello! I'm Bryan, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design"
};

export const PROJECTS = [
  {
    title: "E-commerce Platform",
    subtitle:
      "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: image1,
  },
  {
    title: "Social Media App",
    subtitle:
      "A social media application developed using Next.js and Firebase.",
    image: image2,
  },
  {
    title: "Project Management Tool",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image3,
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
  },
  {
    title: "Weather Dashboard",
    subtitle:
      "A weather dashboard application built with Vue.js and Express.js.",
    image: image5,
  },
  {
    title: "Blog Platform",
    subtitle:
      "A blogging platform developed with Ruby on Rails and PostgreSQL.",
    image: image6,
  },
  {
    title: "Fitness Tracker",
    subtitle: "A fitness tracking app created using Flutter and Firebase.",
    image: image7,
  },
  {
    title: "Recipe Finder",
    subtitle: "A recipe finder application developed with Angular and Node.js.",
    image: image8,
  },
];

export const SKILLS = [
  {
    category: "Front-end",
    skills: [
      { name: "HTML", experience: "75%", color: "bg-red-500", icon: <FaHtml5 className="text-2xl text-orange-600" /> },
      { name: "CSS", experience: "75%", color: "bg-blue-500", icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
      { name: "JavaScript", experience: "65%", color: "bg-yellow-500", icon: <FaJs className="text-2xl text-yellow-500" /> },
      { name: "React", experience: "70%", color: "bg-blue-400", icon: <FaReact className="text-2xl text-blue-400" /> },
      { name: "Bootstrap", experience: "70%", color: "bg-purple-600", icon: <FaBootstrap className="text-2xl text-purple-600" /> },
    ],
  },
  {
    category: "Back-end",
    skills: [
      { name: "Spring Boot", experience: "65%", color: "bg-green-500", icon: <SiSpring className="text-2xl text-green-500" /> },
      { name: "Java", experience: "65%", color: "bg-blue-900", icon: <FaJava className="text-2xl text-blue-900" /> },
      { name: "MySQL", experience: "75%", color: "bg-blue-600", icon: <FaDatabase className="text-2xl text-blue-600" /> },
      { name: "Spring", experience: "65%", color: "bg-green-500", icon: <SiSpring className="text-2xl text-green-500" /> },
      { name: "Node.js", experience: "65%", color: "bg-green-800", icon: <FaNode className="text-2xl text-green-800" /> },
    ],
  }
];

export const EDUCATION = [
  {
    institution: 'Lithan EduCLaaS',
    degree: 'Applied Degree in Software Engineering (BDSE)',
    location: 'Singapore',
    duration: '2023 - Present',
    logo: '/src/assets/lithan-logo.png' 
  },
  {
    institution: 'University of Cebu',
    degree: 'Bachelor of Science in Information Technology (SE)',
    location: 'Banilad, Philippines',
    duration: '2023 - Present',
    logo: '/src/assets/uc-logo.png', 
  },
  {
    institution: 'University of Cebu',
    degree: 'Senior High School (K-12):STEM',
    location: 'Lapu-Lapu & Mandaue, Philippines',
    duration: '2021-2023',
    logo: '/src/assets/uc-logo.png', 
  },
  
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
