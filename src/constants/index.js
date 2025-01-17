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
  starbucks,
  tesla,
  carrent,
  jobit,
  threejs,
  bread,
  task,
  tabang,
  kawaii,
  jokaii,
  koda,
  ts,
  nextjs,
  react,
  reduxState,
  gitHub,
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
    title: "Web Developer (Part-time)",
    company_name: "Yaramay",
    icon: starbucks,
    iconBg: "#445069",
    date: "September 2022 - October 2022",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
    title: "Full stack Developer (Thesis)",
    company_name: "Bohol Island State University",
    icon: tesla,
    iconBg: "#96B6C5",
    date: "January 2023 - May 2023",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
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
    name: "E-trabaho - Empowering Freelancers, Connecting Opportunities",
    description:
      "E-trabaho is a dynamic freelancing platform designed to empower both freelancers and clients. Whether you're a creative genius, a technical virtuoso, or a business visionary, e-trabaho opens doors to a world of possibilities.",
    tags: [
      {
        name: "Laravel Framework",
        color: "blue-text-gradient",
      },
      {
        name: "MySql Database",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap Css",
        color: "orange-text-gradient",
      },
      {
        name: "Ajax",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://etrabaho.liqwidcode.site/",
  },
  {
    name: "Profiling Management System - Streamlining Data Management",
    description:
      "The DHMIT Staff Information Management System is an advanced desktop application that simplifies the collection, organization, and backup of essential personal information for your department's staff and also it's secured.",
    tags: [
      {
        name: "Vb.Net",
        color: "blue-text-gradient",
      },
      {
        name: "MySql Database",
        color: "green-text-gradient",
      },
      {
        name: "XAMPP",
        color: "orange-text-gradient",
      },
      {
        name: "Crystal Report",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/ViltLaravel/Profiling-VB.net/tree/main/DHMIT_SYSTEM",
  },
  {
    name: "Tabang OFW - A platform for Filipino emergency assistance and support.",
    description:
      "Tabang OFW is a powerful web platform designed to address the needs of Overseas Filipino Workers who face abuse and adversity while working in foreign countries. This comprehensive solution offers a range of resources to empower OFWs.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
      {
        name: "GitHub",
        color: "pink-text-gradient",
      },
      {
        name: "VsCode",
        color: "pink-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: tabang,
    source_code_link: "https://viltlaravel.github.io/tabangOFW/",
  },
  {
    name: "RESTful Task Management System",
    description:
      "Our task management system integrates Laravel's RESTful API with Vue 3 Composition API for a seamless blend of backend reliability and frontend interactivity. It streamlines task creation, assignment, and tracking while ensuring a responsive and intuitive user experience.",
    tags: [
      {
        name: "Laravel Framework",
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
    image: task,
    source_code_link: "https://todo-fe-rust.vercel.app/",
  },
  {
    name: "KAWAII - Discover Your Next Anime",
    description:
      "KAWAII - Discover Your Next Anime is a user-friendly platform that helps anime enthusiasts find their next favorite series. With advanced search features and personalized recommendations, KAWAII makes exploring new anime easy and enjoyable for both seasoned fans and newcomers",
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
    source_code_link: "https://anime-finder-lyart.vercel.app/",
  },
  {
    name: "JOKIE - Your Random Programming Joke Generator",
    description:
      "JOKIE is your go-to random programming joke generator, perfect for a quick laugh during coding sessions. With a vast library of jokes, JOKIE ensures you always have a fresh quip to share with fellow developers. Add some humor to your day with JOKIE!",
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
