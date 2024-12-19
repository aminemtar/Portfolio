import {
    mobile,
    backend,
    orange,
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
    artie,
    project,
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
      title: "FullStack IOS Developer",
      company_name: "Orange Tunisia",
      icon: orange,
      iconBg: "#383E56",
      date: "Febraury 2024 - August 2024",
      points: [
        "📱 Developed a native iOS application to enhance member engagement and facilitate access to ODC Club activities across Tunisian universities.",
        "🎨 Used SwiftUI to design an intuitive, modern, and interactive user interface with Clean Architecture for maintainable and scalable code.",
        "🗓️ Built a custom event calendar from scratch, providing seamless navigation and event exploration.",
        "🌍 Integrated an interactive map to showcase the Orange Digital Center (ODC) ecosystem and its clubs.",
        "🔔 Implemented real-time notifications and user interactions, including likes and comments, using Firebase, with Core Data for local storage of notifications to ensure offline access.",
        "💾 Developed a robust backend with Node.js and MongoDB for efficient data management.",
        "🔗 Ensured seamless integration of RESTful APIs for real-time data synchronization.",
        "🛠️ Followed Agile methodology (SCRUM) to prioritize features and ensure on-time delivery.",
        "🏆 Contributed to community engagement by providing a platform that bridges the gap between ODC members and resources.",
      ],
    },
    {
      title: "Engineering intern",
      company_name: "ooredoo Tunisia",
      icon: ooredoo,
      iconBg: "#383E56",
      date: "June 2023 - August 2023",
      points: [
        "🌐 Developed a responsive web application using Angular for an intuitive and dynamic frontend experience.",
        "🛡️ Implemented Spring Security for robust role-based access control and secure authentication.",
        "🚀 Boosted performance and engagement by 20% through efficient design and optimization.",
        "🗄️ Integrated PostgreSQL to streamline data management, reducing retrieval times by 15%.",
        "🔗 Built a scalable RESTful API backend with Spring Boot, ensuring seamless communication with the frontend.",
        "📱 Ensured mobile-first, responsive design, delivering a consistent user experience across devices.",
        "🛠️ Adopted Agile development practices, prioritizing features and delivering on time.",
        "📊 Enhanced data processing with efficient query handling and optimized database interactions.",
      ],
    },
    {
      title: "Developper intern",
      company_name: "Cloud Monsters Tunisia",
      icon: cloud,
      iconBg: "#E6DEDD",
      date: "June 2022 - July 2022",
      points: [
        "📚 Revamped an online educational platform for children, incorporating interactive features using HTML, CSS, and JavaScript, resulting in a 25% increase in user interaction and retention.",
        "🌟 Focused on accessibility and usability improvements, leading to a 15% boost in user satisfaction.",
        "💾 Integrated Firebase to efficiently store and manage books, levels, and related data, ensuring seamless access and synchronization.",
        "📱 Ensured a responsive design, delivering a seamless experience across devices.",
        "🛠️ Optimized the platform’s performance to support engaging and user-friendly interactions.",
        "🚀 Enhanced the platform’s appeal through thoughtful UI/UX design tailored for a younger audience.",
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
      image: project,
      source_code_link: "https://github.com/aminemtar/DEVOPS/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };