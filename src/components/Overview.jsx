import React from 'react';
import { motion } from 'framer-motion';
import { services, technologies } from '../constants';
import { fadeIn } from './styles/fadeIn';
import BackgroundComponent from '../ui/evervault-bg';

const About = () => {
  return (
    <>

        <IntroductionSection />
        <TechnologiesSection /> 
      
    </>
  );
};

const IntroductionSection = () => (
  <section className="relative w-full h-auto bg-gradient-to-b from-slate-950 via-gray-900 to-gray-950 text-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-6 sm:px-16 py-10">
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn('up', 0, 1)}
        className="space-y-4"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-gray-400 font-mono">INTRODUCTION</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
        <p className="mt-4 text-secondary text-gray-300 text-[19px] max-w-3xl leading-[30px]">
          I am a software developer with skills in JavaScript and experience using frameworks like React, Express.js, Tailwind CSS, and EJS. I also have knowledge of databases like SQL and MongoDB. I am a quick learner and work well with others to build efficient, scalable, and user-friendly solutions that solve real-world problems.
        </p>
      </motion.div>
    </div>
  </section>
);

const TechnologiesSection = () => (
  <section className="relative w-full h-auto bg-gradient-to-b from-gray-950 via-slate-950 to-slate-950 text-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-6 sm:px-16 py-10">
      
      <div className="relative z-10 p-4 pointer-events-none">
        {/* Here mt-36 sm:mt-2 is added for allignment issue in across devices */}
        <div className="flex flex-wrap justify-center">
          {technologies.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
      <BackgroundComponent className="absolute inset-0 xl:rounded-2xl" />
    </div>
  </section>
);

// const TechCard = ({ tech }) => (
//   <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
//     <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full flex items-center justify-center overflow-hidden bg-black/80 backdrop-blur-3xl">
//       <img
//         src={tech.icon}
//         alt={tech.name}
//         className="w-20 sm:w-24 pointer-events-none"
//       />
//     </div>
//   </div>
// );

const TechCard = ({ tech }) => (
  <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
    <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-full mx-auto mt-2 relative">
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-black/[0.8] blur-sm rounded-full" />
      {/* Centered Icon */}
      <img
        src={tech.icon}
        alt={tech.name}
        className="absolute inset-0 z-10 w-20 sm:w-24 mx-auto mt-4 "
      />
    </div>
  </div>
);





export default About;
