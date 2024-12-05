import React from 'react';
import { motion } from 'framer-motion';
import { services, technologies } from '../constants';
import { fadeIn } from './styles/fadeIn';
import BackgroundComponent from './ui/evervault-bg';

const About = () => {
  return (
    <>
      <IntroductionSection />
      <TechnologiesSection />
    </>
  );
};

const IntroductionSection = () => (
  <section className="relative w-full h-auto bg-gradient-to-b from-blue-950 via-gray-950 to-gray-950 text-white overflow-hidden">
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
          I'm a skilled Software developer with experience in JavaScript and expertise in frameworks like React, Express.js., Tailwind, EJS. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems.
        </p>
      </motion.div>
    </div>
  </section>
);

const TechnologiesSection = () => (
  <section className="relative w-full h-auto bg-gradient-to-b from-gray-950 via-slate-950 to-slate-950 text-white overflow-hidden">
    <div className="relative max-w-7xl mx-auto px-6 sm:px-16 py-10">
      <BackgroundComponent className="absolute inset-0 xl:rounded-2xl" />
      <div className="relative z-10 p-4 pointer-events-none">
        <div className="flex flex-wrap justify-center">
          {technologies.map((tech) => (
            <TechCard key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TechCard = ({ tech }) => (
  <div className="w-40 h-40">
    <div className="relative h-32 w-32 rounded-full flex items-center justify-center">
      <div className="absolute w-full h-full bg-black/[0.8] blur-sm rounded-full" />
      <img src={tech.icon} alt={tech.name} className="z-20 w-24 pointer-events-none" />
    </div>
  </div>
);

export default About;
