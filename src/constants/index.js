import {
    mobile,
    backend,
    creator,
    web,
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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Laravel Developer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
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
      company_name: "Bohol Isand State University",
      icon: tesla,
      iconBg: "#96B6C5",
      date: "Jun 2022 - Sep 2022",
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
      date: "Jan 2023 - May 2023",
      points: [
        "Developing and maintaining web applications using Laravel and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      image: "https://tse4.mm.bing.net/th?id=OIP.0A1RSeVHV4YfoDGR2jUvHwHaHa&pid=Api&P=0&h=180",
    },
    {
      testimonial:
        "Nicole's unwavering dedication and tireless work ethic make her a standout developer in every sense.",
      name: "Ferdz Sab",
      designation: "CEO",
      company: "Yaramay Corp",
      image: "https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png",
    },
    {
      testimonial:
        "Congratulations on your victory at the student congress! Your website stands out as the top-notch research platform. Well done!",
      name: "Joel Piollo",
      designation: "Instructor",
      company: "Bohol Island State University",
      image: "https://www.366icons.com/media/01/profile-avatar-account-icon-16699.png",
    },
  ];
  
  const projects = [
    {
      name: "e-trabaho",
      description:
        "e-trabaho is a dynamic freelancing platform designed to empower both freelancers and clients. Whether you're a creative genius, a technical virtuoso, or a business visionary, e-trabaho opens doors to a world of possibilities.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/ViltLaravel/laravel-Thesis",
    },
    {
      name: "Profiling System",
      description:
        "The DHMIT Staff Information Management System is an advanced desktop application that simplifies the collection, organization, and backup of essential personal information for your department's staff and also it's secured.",
      tags: [
        {
          name: "vb.net",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "crystal report",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ViltLaravel/Profiling-VB.net/tree/main/DHMIT_SYSTEM",
    },
    {
      name: "tabang ofw",
      description:
        "Tabang OFW is a powerful web platform designed to address the needs of Overseas Filipino Workers who face abuse and adversity while working in foreign countries. This comprehensive solution offers a range of resources to empower OFWs.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/ViltLaravel/tabangOFW",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };