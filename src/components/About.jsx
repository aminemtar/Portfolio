import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a dedicated engineer specializing in Web and Mobile Application Development, blending technical expertise with a passion for crafting user-centric solutions. My core strength lies in developing innovative and seamless applications for both iOS and Android platforms, utilizing Swift for iOS and Kotlin for Android to deliver intuitive and efficient experiences.

In the domain of cross-platform development, I leverage modern frameworks like Flutter and React Native to create cohesive and high-performance applications across multiple platforms. My web development skills encompass creating scalable, responsive, and feature-rich applications using frameworks and technologies such as React, Angular, Node.js, and Spring Boot.

With a robust foundation in system engineering, I approach each project with a holistic perspective, ensuring alignment with the latest industry standards and a commitment to delivering solutions that exceed user expectations. My expertise spans the full development lifecycle, from concept to deployment, backed by hands-on experience in Agile methodologies, CI/CD pipelines, and containerization practices.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");