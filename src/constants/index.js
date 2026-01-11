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
  beachday,
  upwork,
  gemp,
  yep,
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
    title: "Creative",
    icon: skills_1,
  },
  {
    title: "Analytical",
    icon: skills_2,
  },
  {
    title: "Adaptive",
    icon: skills_3,
  },
  {
    title: "Reliable",
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
    date: "June 2025 - Present",
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
    name: "GEMP",
    description:
      "During my work in ZongHa, we developed the GEMP Online System to support the Department of Energy’s Government Energy Management Program (GEMP). The platform enables agencies to report and monitor their energy use efficiently, supporting the DOE’s goal of reducing electricity and fuel consumption by 10%.",
    tools: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "red-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
      {
        name: "Restful API",
        color: "orange-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
       {
        name: "XAMPP",
        color: "orange-text-gradient",
      },
       {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: gemp,
    source_code_link: "https://gemp.doe.gov.ph/",
    role: [
      {
        name: "Frontend Developer",
        color: "orange-text-gradient",
      },
    ],
  },
  {
    name: "Yep Dev",
    description:
      "Through an Upwork project, I contributed to the development of the Yep website, an AI chat-bot platform designed to facilitate fast, intuitive communication powered by intelligent automation. With a focus on clean design and responsive interaction, the site delivers an engaging user experience while empowering clients to connect seamlessly with AI-driven support.",
    tools: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
      {
        name: "Open Router",
        color: "red-text-gradient",
      },
      {
        name: "Stripe Payment",
        color: "orange-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "PostgresSQL",
        color: "green-text-gradient",
      },
    ],
    image: yep,
    source_code_link: "https://yep-dev-staging.vercel.app/",
    role: [
      {
        name: "Fullstack Developer",
        color: "blue-text-gradient",
      },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects };
