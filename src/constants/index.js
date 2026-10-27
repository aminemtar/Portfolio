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
  cloud,
  shopify,
  ooredoo,
  orange,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  springboot,
  cloth,
  jenkins,
  project,
  artie
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
    title: "iOS Developer",
    icon: mobile,
  },
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
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
    name: "springboot",
    icon: springboot,
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
  { title: "Mobile Developer — Flutter & Android", company_name: "Smart Conseil / Netethic", icon: mobile, iconBg: "#dceeff", date: "2025 - 2026", points: ["Developed and maintained Flutter applications for education and digital services.", "Integrated REST APIs, managed application state and errors, and collaborated with design and backend teams.", "Contributed to Django APIs and native Android applications; supported releases to Google Play and the App Store."] },
  { title: "Software Engineer — Final-Year Project", company_name: "Orange Digital Center Tunisia", icon: orange, iconBg: "#fff1df", date: "February 2024 - August 2024", points: ["Built the ODC Clubs iOS application with SwiftUI, Clean Architecture, MapKit and Core Data.", "Implemented events, calendars, articles, votes, push notifications and an interactive map of ODC Clubs.", "Developed Node.js / MongoDB REST APIs and delivered the project using Scrum."] },
  { title: "Full-Stack Developer Intern", company_name: "Ooredoo Tunisia", icon: ooredoo, iconBg: "#e9f4ff", date: "June 2023 - August 2023", points: ["Built a web platform for SMS script and survey management using Angular, Spring Boot and PostgreSQL.", "Implemented secure role-based access and responsive administration workflows."] },
  { title: "Web Developer Intern", company_name: "Cloud Monsters Tunisia", icon: cloud, iconBg: "#e9f4ff", date: "June 2022 - July 2022", points: ["Created an interactive, gamified learning platform using React and Firebase.", "Developed educational content and book/level storage to support children's learning."] }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const tag = (name, color = "blue-text-gradient") => ({ name, color });
const projects = [
  { name: "ODC Clubs", description: "A complete digital ecosystem for Orange Digital Center clubs: iOS SwiftUI app, events, calendar, voting, articles, notifications, MapKit and Node.js / MongoDB services.", tags: [tag("SwiftUI"), tag("MapKit"), tag("Node.js"), tag("MongoDB")], image: project, source_code_link: "https://github.com/aminemtar" },
  { name: "Clothy", description: "Smart wardrobe and outfit planning on iOS and Android, with image recognition, item exchange, real-time chat and a Node.js / MongoDB backend.", tags: [tag("SwiftUI"), tag("Kotlin"), tag("Core ML"), tag("Node.js")], image: cloth, source_code_link: "https://github.com/aminemtar/ClothyApp-Android" },
  { name: "Artie — Award-Winning Robotics", description: "Educational drawing robot with Flutter mobile control, Raspberry Pi, image-to-GCode processing, React dashboard and Node.js backend. Top 3 at ESPRIT Ball de Projet 2023.", tags: [tag("Flutter"), tag("React"), tag("Raspberry Pi")], image: artie, source_code_link: "https://github.com/aminemtar" },
  { name: "Health 360", description: "iOS health management application built with SwiftUI and VisionKit for text recognition, plus AI-assisted medication analysis and NestJS APIs.", tags: [tag("SwiftUI"), tag("VisionKit"), tag("NestJS")], image: mobile, source_code_link: "https://github.com/aminemtar" },
  { name: "MyLife Expenses", description: "Flutter expense management app with offline-first persistence, spending dashboards, and ongoing family subscription and synchronization features.", tags: [tag("Flutter"), tag("Drift"), tag("Supabase")], image: mobile, source_code_link: "https://github.com/aminemtar/MyLife-Expenses" },
  { name: "DevOps CI/CD Platform", description: "End-to-end automated delivery pipeline using Jenkins, Docker, SonarQube, Nexus, Grafana and Prometheus with Angular and Spring Boot.", tags: [tag("Jenkins"), tag("Docker"), tag("Grafana")], image: jenkins, source_code_link: "https://github.com/aminemtar/DEVOPS" },
  { name: "MacWatch", description: "macOS monitoring utility for device temperature, system activity and accessible performance charts.", tags: [tag("macOS"), tag("Monitoring")], image: backend, source_code_link: "https://github.com/aminemtar/MacWatch" }
];
export { services, technologies, experiences, testimonials, projects };
