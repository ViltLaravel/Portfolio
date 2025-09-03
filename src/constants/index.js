import {
  koda,
  zongha,
  typescript,
  html,
  redux,
  tailwind,
  git,
  figma,
  docker,
  nextjs,
  react,
  laravel,
  postgres,
  kawaii,
  jokaii,
  beachday,
  upwork,
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
    title: "Problem Solver",
    icon: skills_1,
  },
  {
    title: "Builder",
    icon: skills_2,
  },
  {
    title: "Collaborator",
    icon: skills_3,
  },
  {
    title: "Learner",
    icon: skills_4,
  },
];

const technologies = [
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "postgres",
    icon: postgres,
  },
  {
    name: "HTML 5",
    icon: html,
  },
];

const experiences = [
  {
    title: "Software Engineer - Onsite (Full-time)",
    company_name: "KODA Kollectiv Inc.",
    icon: koda,
    iconBg: "#F5F5F5",
    date: "June 2024 - Present",
    points: [
      "Develop and maintain scalable web and mobile applications, ensuring high performance and seamless user experience.",
      "Collaborate with cross-functional teams to design, implement, and optimize software solutions that meet business and user needs.",
      "Utilize modern technologies and frameworks to build efficient, maintainable, and secure applications.",
      "Troubleshoot and debug software issues, improving system reliability and performance.",
      "Continuously learn and adapt to emerging technologies to enhance development processes and deliver innovative solutions.",
    ],
  },
  {
    title: "Frontend Developer - Remote (Freelance)",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#08CB00",
    date: "June 2022 - Present",
    points: [
      "Developed responsive web applications using React.js and Next.js.",
      "Designed clean and user-friendly interfaces with Figma and Tailwind CSS.",
      "Implemented SEO-friendly and optimized websites.",
      "Integrated APIs and delivered accessible, maintainable code.",
      "Focused on making clients satisfied with quality results and timely delivery.",
    ],
  },
  {
    title: "Junior Software Engineer Remote (Full-time)",
    company_name: "Zongha Technologies",
    icon: zongha,
    iconBg: "#000000",
    date: "June 2023 - May 2024",
    points: [
      "Develop and maintain web and mobile applications, ensuring optimal functionality, performance, and scalability.",
      " Collaborate with the team to implement new features, resolve bugs, and enhance code efficiency.",
      "Leverage modern frameworks and technologies to build secure, maintainable, and high-quality software solutions.",
      "Effectively manage time to meet project deadlines while balancing other responsibilities.",
      "Stay proactive in learning, keeping up with industry trends to refine development skills and best practices.",
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
