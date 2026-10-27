import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#skills" },
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
