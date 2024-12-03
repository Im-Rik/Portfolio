import React from 'react';
import { motion } from 'framer-motion';
import {services} from '../constants'


const fadeIn = (direction = 'up', delay = 0, duration = 0.5) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 100 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: 'easeOut',
    },
  },
});

const vibration = {
  rest: {
    x: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  vibrate: {
    x: [0, -2, 2, -2, 2, -2, 2, -2, 2, -2, 2, 0],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const tiltVariants = (index) => ({
    hidden: { rotate: 0 },
    show: {
      rotate: index % 2 === 0 ? [0, 2, -2, 2, 0] : [0, -2, 2, -2, 0], // Alternating tilt
      transition: {
        duration: 0.7,        // Duration of each cycle
        repeat: Infinity,     // Infinite loop
      },
    },
    hover: {
        rotate: 0,             // No vibration when hovered
        transition: {
          duration: 0.2,       // Smooth stop when hovering
          ease: "easeOut",
        },
      },
  });


const About = () => {
  return (
    <section className="relative w-full min-h-screen h-auto bg-gradient-to-b from-blue-950 via-gray-950 to-gray-950 text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 sm:px-16 py-10">
            {/* Introduction Section */}
            <div>
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

            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
              ))}
            </div>
        </div>
    </section>
  );
};

const ServiceCard = ({ title, icon, index }) => (
    <div className='xs:w-[250px] w-full'>
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeIn('up', 0.75, 0.2)}
        className="rounded-xl overflow-hidden bg-gradient-to-b from-gray-400 to-blue-500 p-[2px] shadow-lg transform transition-transform duration-500 w-full">
        
        <motion.div
          variants={tiltVariants(index)} // Pass index to determine tilt direction
          initial="hidden"
          animate="show"
          whileHover = "hover"
          className="bg-gray-900 rounded-xl py-5 px-12 min-h-[320px] flex flex-col items-center justify-center text-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center mt-8">{title}</h3>
        </motion.div>
  
      </motion.div>
    </div>
  );
  

export default About;
