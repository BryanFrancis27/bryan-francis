import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaJava, FaDatabase, FaNode } from "react-icons/fa";
import { SiSpring } from "react-icons/si";

import image1 from "../assets/DobuMartialArts.png";
import image2 from "../assets/ABCCarsportal.png";
import image3 from "../assets/Boutiqa.png";
import image4 from "../assets/MealsOnWheels.png";
// import image5 from "../assets/project5.jpeg";
// import image6 from "../assets/project6.jpeg";
// import image7 from "../assets/project7.jpeg";
// import image8 from "../assets/project8.jpeg";


export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Bryan Encarnacion",
  info: "A versatile Software Developer blending technical expertise with creative graphic design skills.",
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
    title: "Dobu Martial Arts",
    subtitle: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    image: image1,
    details: "This platform allows users to browse products, add them to a cart, and securely check out. It features user authentication, a product review system, and an admin dashboard for managing products and orders.",
    sourceCodeLink: "https://github.com/username/e-commerce-platform",
  },
  {
    title: "ABC Cars Portal",
    subtitle: "A social media application developed using Next.js and Firebase.",
    image: image2,
    details: "This app supports real-time messaging, user profiles, and post sharing. It uses Firebase for authentication, database, and hosting, with Next.js ensuring efficient server-side rendering.",
    sourceCodeLink: "https://github.com/BryanFrancis27/ABCcars_portal.git",
  },
  {
    title: "Boutiqa",
    subtitle: "A project management tool built with Django and PostgreSQL.",
    image: image3,
    details: "This tool enables teams to collaborate on projects by tracking tasks, deadlines, and progress. It includes features like user roles, project timelines, and task assignments.",
    sourceCodeLink: "https://github.com/username/project-management-tool",
  },
  {
    title: "Meals on Wheels",
    subtitle: "A personal portfolio website designed with HTML, CSS, and JavaScript.",
    image: image4,
    details: "This portfolio showcases my skills, projects, and experience. It includes sections like About Me, Projects, Skills, and Contact, all in a responsive design.",
    sourceCodeLink: "https://github.com/username/personal-portfolio",
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
    institution: 'University of Cebu',
    degree: 'Senior High School (K-12):STEM',
    location: 'Lapu-Lapu & Mandaue, Philippines',
    duration: '2021-2023',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/University-of-Cebu-Logo.jpg', 
  },
  {
    institution: 'University of Cebu',
    degree: 'Bachelor of Science in Information Technology (SE)',
    location: 'Banilad, Philippines',
    duration: '2023 - Present',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/University-of-Cebu-Logo.jpg', 
  },
  {
    institution: 'Lithan EduCLaaS',
    degree: 'Applied Degree in Software Engineering (BDSE)',
    location: 'Singapore',
    duration: '2023 - Present',
    logo: 'https://www.educlaas.com/highered/wp-content/uploads/sites/14/2024/06/EduCLaaS-Lithan-Vertical-01-1.png', 
  },  
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/bryanfrancis.27",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/BryanFrancis27",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/bryan-francis-encarnacion-997126304/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
