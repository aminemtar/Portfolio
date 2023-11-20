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
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    springboot,
    cloth,
    jenkins,
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
    {
      title: "Engineering intern",
      company_name: "ooredoo Tunisie SA",
      icon: ooredoo,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "Led the development of VoicyApp, a sophisticated survey web application designed to manage scripts, scales, questions, and administrative surveys seamlessly.",
        "Implementing robust features using Angular for the front end, Spring Boot for the backend, and PostgreSQL for data storage, ensuring a reliable and efficient survey management system.",
        "Leveraged Angular to create an intuitive and responsive user interface, allowing administrators to easily organize, edit, and deploy survey scripts and scales.",
        "Integrating PostgreSQL to manage survey data efficiently, optimizing data retrieval and storage processes for a responsive and reliable survey management application.",
      ],
    },
    {
      title: "Developper intern",
      company_name: "Cloud Monsters Tunisia",
      icon: cloud,
      iconBg: "#E6DEDD",
      date: "June 2022 - July 2022",
      points: [
        "Spearheaded the development of an innovative educational platform that transforms primary school courses into interactive and engaging educational games.",
        "Introduced a novel approach where each lesson from the primary school books is gamified, turning the learning process into an enjoyable and effective experience for students.",
        "Contributed to the design and implementation of a user-friendly interface, ensuring that the platform caters to the needs and preferences of primary school students.",
        "Successfully integrated the primary school curriculum into the platform, aligning educational content with the specific requirements of each lesson in the books.",
        "Contributed to the creation of an impactful educational resource that goes beyond traditional teaching methods, fostering a positive and interactive learning environment for primary school students.",
      ],
    },
   
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
  
  const projects = [
    {
      name: "Clothy",
      description:
"Clothy is a versatile wardrobe management app, available on iOS and Android. Using image recognition, it simplifies adding and organizing clothes in your digital wardrobe. With complete style control, plan outfits effortlessly and explore new combinations on the go.",
      tags: [
        {
          name: "Swift",
          color: "blue-text-gradient",
        },
        {
          name: "Kotlin",
          color: "green-text-gradient",
        },
        {
          name: "NodeJs",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDB",
          color: "yellow-text-gradient",
        },
      ],
      image: cloth,
      source_code_link: "https://github.com/aminemtar/ClothyApp-Android/",
    },
    {
      name: "Artie",
      description:
"Artie, a revolutionary project, seamlessly blends art and technology for a unique interactive experience. Fueled by a Raspberry Pi, it communicates with a Flutter app via sockets, allowing children to bring their chosen images to life through precise reproductions. This project showcases my skill in advanced technology integration, reflecting my passion for education, art, and innovation.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "Raspberry pi",
          color: "pink-text-gradient",
        },
      ],
      image: artie,
      source_code_link: "https://github.com/aminemtar",
    },
    {
      name: "DEVOPS",
      description:
"In the DevOps Module Project, I've mastered modern software development by constructing a robust CI/CD pipeline. This journey includes version control, automated testing, containerization, and Infrastructure as Code. Orchestrated by tools like Jenkins, it ensures efficient code compilation, rigorous testing, and secure deployments. Integrated monitoring and documentation complete this comprehensive approach to agile and reliable software delivery.",
      tags: [
        {
          name: "Docker",
          color: "blue-text-gradient",
        },
        {
          name: "Jenkins",
          color: "green-text-gradient",
        },
        {
          name: "Grafana",
          color: "pink-text-gradient",
        },
        {
          name: "Prometheus",
          color: "blue-text-gradient",
        }
      ],
      image: jenkins,
      source_code_link: "https://github.com/aminemtar/DEVOPS/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };