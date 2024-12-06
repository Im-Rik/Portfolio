import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import {ProjectCard} from '../ui/card-gradient'

const fadeIn = (direction = "up", delay = 0, duration = 0.5) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 100 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});

const Projects = () => {
  return (
    <section
      id="project"
      className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 via-gray-950 to-blue-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10">
        <motion.div variants={fadeIn("", 0, 1)} className="space-y-4">
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider font-mono">
            My Works
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-gray-300 text-[19px] max-w-3xl leading-[30px]"
        >
          Explore my work to see how I apply my skills and creativity to solve complex problems and create impactful
          solutions.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-10 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default Projects;
