import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tesla,
  threejs,
  bread,
  kawaii,
  jokaii,
  koda,
  ts,
  nextjs,
  react,
  reduxState,
  gitHub,
  beachday,
} from "../assets";

import skills_1 from "/skills/skill-1.png";
import skills_2 from "/skills/skill-2.png";
import skills_3 from "/skills/skill-3.png";
import skills_4 from "/skills/skill-4.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: skills_1,
  },
  {
    title: "Back-end Developer",
    icon: skills_2,
  },
  {
    title: "Professional Software Engineer",
    icon: skills_3,
  },
  {
    title: "UI/UX Designer",
    icon: skills_4,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "ts",
    icon: ts,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "react",
    icon: react,
  },
  {
    name: "redux",
    icon: reduxState,
  },
  {
    name: "github",
    icon: gitHub,
  },
];

const experiences = [
  {
    title: "Software Developer (Internship)",
    company_name: "Bohol Island State University",
    icon: tesla,
    iconBg: "#96B6C5",
    date: "June 2022 - September 2022",
    points: [
      "Developing and maintaining desktop applications using Vb.net and other related technologies.",
      "Implementing responsive design and ensuring user-friendy interface.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Junior Software Engineer (Full-time)",
    company_name: "Bread's Edge Corporation",
    icon: bread,
    iconBg: "#96B6C5",
    date: "August 2023 - April 2024",
    points: [
      "Creating and managing the company's website with Laravel and associated technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Taking part in code reviews and offering helpful input to fellow developers.",
    ],
  },
  {
    title: "Software Engineer (Full-time)",
    company_name: "KODA Kollectiv Inc.",
    icon: koda,
    iconBg: "#F5F5F5",
    date: "June 2024 - Present",
    points: [
      "I'm working on different projects using different languages based on the project's requirements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Our best work comes from understanding our clients and ensuring their satisfaction.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Nicole proved me wrong.",
    name: "Maria Nilda Jaspe",
    designation: "Manager",
    company: "PESO Department",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.0A1RSeVHV4YfoDGR2jUvHwHaHa&pid=Api&P=0&h=180",
  },
  {
    testimonial:
      "Nicole's unwavering dedication and tireless work ethic make him a standout developer in every sense.",
    name: "Ferdz Sab",
    designation: "CEO",
    company: "Yaramay Corp",
    image:
      "https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png",
  },
  {
    testimonial:
      "Congratulations on your victory at the student congress! Your website stands out as the top-notch research platform. Well done!",
    name: "Joel Piollo",
    designation: "Instructor",
    company: "Bohol Island State University",
    image:
      "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png",
  },
];

const projects = [
  {
    name: "BeachDay",
    description:
      "At beachday, we know how challenging it can be to manage daily operations while focusing on growth. That's why we provide highly qualified Operations Strategists to handle essential tasks, allowing clients to maximize their impact. With a commitment to efficiency and excellence, beachday helps businesses Surf through tasks, soak up more free time by ensuring seamless workflows and enhanced productivity.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
      {
        name: "Framer Motion",
        color: "orange-text-gradient",
      },
      {
        name: "Node Mailer",
        color: "yellow-text-gradient",
      },
      {
        name: "Shadcn UI",
        color: "red-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: beachday,
    source_code_link: "https://www.beachday.co/home",
  },
  {
    name: "Kawaii",
    description:
      "Kawaii – Discover Your Next Anime is a user-friendly platform designed to help anime enthusiasts find their next favorite series. Featuring advanced search tools and personalized recommendations, KAWAII makes discovering new anime simple, fun, and rewarding. Whether you're a long-time fan or just starting out, KAWAII enhances your anime journey every step of the way.",
    tags: [
      {
        name: "RESTful API",
        color: "blue-text-gradient",
      },
      {
        name: "Vue Js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "orange-text-gradient",
      },
    ],
    image: kawaii,
    source_code_link: "https://kawaii-anime-finder.vercel.app/",
  },
  {
    name: "Jokiie",
    description:
      "Jokiie is your go-to random programming joke generator, ideal for a quick laugh during coding sessions. With a vast library of clever tech jokes, Jokiie keeps the humor flowing and the mood light. Share a quip with fellow developers or enjoy a solo chuckle—Jokiie brings fun into your daily coding routine.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "RESTful API",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "orange-text-gradient",
      },
    ],
    image: jokaii,
    source_code_link: "https://jokai-ivory.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
