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
  age: 20,
  degree: "BSIT-Software Engineering",
  website: "bryan-francis.vercel.app",
  email: "bryanfrancis1027@gmail.com",
  linkedin: "Bryan Francis Encarnacion",
  text1: "I create dynamic responsive websites that blend creativity with efficiency",
  text2: "Hello! I'm Bryan, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design.",
};

export const PROJECTS = [
  {
    title: "Dobu Martial Arts",
    subtitle: "HTML | CSS | Javascript | JQuery",
    image: image1,
    details: "DoBu Martial Arts is a dynamic martial arts gym offering diverse classes, fitness training, and self-defense courses, now supported by a custom-designed, user-friendly website to enhance its online presence and operations.",
    sourceCodeLink: "https://github.com/BryanFrancis27/Dobu-Martial-Arts.git",
  },
  {
    title: "ABC Cars Portal",
    subtitle: "Spring Boot | Java | MySQL",
    image: image2,
    details: "ABC Cars is a user-friendly used car sales portal built with Spring Framework and MySQL, focusing on seamless functionality and quality assurance through Risk-Based Testing.",
    sourceCodeLink: "https://github.com/BryanFrancis27/ABCcars_portal.git",
  },
  {
    title: "Boutiqa",
    subtitle: "Axure | Prototyping | Wireframing",
    image: image3,
    details: "Boutiqa is a user-focused marketplace designed with high-fidelity prototypes to ensure seamless experiences for both vendors and consumers, prioritizing usability and efficient interactions.",
    sourceCodeLink: "https://github.com/username/project-management-tool",
  },
  {
    title: "Meals on Wheels",
    subtitle: "PHP | Laravel | Vue | MySQL",
    image: image4,
    details: "This web application focuses on assisting individuals with disabilities and the elderly by offering them free food delivery services, specifically tailored to support the efforts of charity organizations.",
    sourceCodeLink: "https://github.com/username/personal-portfolio",
  },
];

export const SKILLS = [
  {
    category: "Front-end",
    skills: [
      { name: "HTML", experience: "75%", color: "bg-gray-500", icon: <FaHtml5 className="text-2xl text-orange-600" /> },
      { name: "CSS", experience: "75%", color: "bg-gray-500", icon: <FaCss3Alt className="text-2xl text-blue-500" /> },
      { name: "JavaScript", experience: "65%", color: "bg-gray-500", icon: <FaJs className="text-2xl text-yellow-500" /> },
      { name: "React", experience: "70%", color: "bg-gray-500", icon: <FaReact className="text-2xl text-blue-400" /> },
      { name: "Bootstrap", experience: "70%", color: "bg-gray-500", icon: <FaBootstrap className="text-2xl text-purple-600" /> },
    ],
  },
  {
    category: "Back-end",
    skills: [
      { name: "Spring Boot", experience: "65%", color: "bg-gray-500", icon: <SiSpring className="text-2xl text-green-500" /> },
      { name: "Java", experience: "65%", color: "bg-gray-500", icon: <FaJava className="text-2xl text-blue-900" /> },
      { name: "MySQL", experience: "75%", color: "bg-gray-500", icon: <FaDatabase className="text-2xl text-blue-600" /> },
      { name: "Spring", experience: "65%", color: "bg-gray-500", icon: <SiSpring className="text-2xl text-green-500" /> },
      { name: "Node.js", experience: "65%", color: "bg-gray-500", icon: <FaNode className="text-2xl text-green-800" /> },
    ],
  }
];

export const EDUCATION = [
  {
    institution: 'Lithan EduCLaaS',
    degree: 'Applied Degree in Software Engineering (BDSE)',
    location: 'Singapore',
    duration: '2023 - Present',
    logo: 'https://www.educlaas.com/highered/wp-content/uploads/sites/14/2024/06/EduCLaaS-Lithan-Vertical-01-1.png', 
  },  
  {
    institution: 'University of Cebu',
    degree: 'Bachelor of Science in Information Technology (SE)',
    location: 'Banilad, Philippines',
    duration: '2023 - Present',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/University-of-Cebu-Logo.jpg', 
  },
  {
    institution: 'University of Cebu',
    degree: 'Senior High School (K-12):STEM',
    location: 'Lapu-Lapu & Mandaue, Philippines',
    duration: '2021-2023',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/University-of-Cebu-Logo.jpg', 
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
