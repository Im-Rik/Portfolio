import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import githubImage from '../assets/github.png';

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

const bounceAnimation = (index) => ({
  animate: {
    y: index % 2 === 0 ? [0, -10, 0, 10, 0] : [0, 10, 0, -10, 0],
    transition: {
      duration: 4,
      ease: 'linear',
      repeat: Infinity,
    },
  },
  hover: {
    y: 0,
    scale: 1.1,
    transition: {
      duration: 0.3,
    },
  },
  whileTap: {
    scale: 0.95,
  },
});

const Projects = () => {
  return (
    <section
      id="project"
      className="relative w-full min-h-screen h-auto bg-gradient-to-b from-slate-950 via-gray-950 to-blue-950 text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-16 py-10">
        <motion.div variants={fadeIn('', 0, 1)} className="space-y-4">
          <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider font-mono">
            My Works
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects.
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-gray-300 text-[19px] max-w-3xl leading-[30px]"
        >
          Explore my work to see how I apply my skills and creativity to solve complex problems and create impactful
          solutions. Each project reflects a commitment to technical excellence and user-centered design.
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

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div
      variants={bounceAnimation(index)}
      animate="animate"
      whileHover="hover"
      className="relative w-full bg-gradient-to-b from-gray-800 to-indigo-900 rounded-xl p-[2px] shadow-lg"
    >
      <div className="bg-gray-900 rounded-xl py-5 px-6 flex flex-col justify-between items-center h-full">
        {/* Project Image */}
        <div className="relative w-full h-[200px] rounded-t-xl overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex justify-end items-start p-2 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, '_blank');
              }}
              className="w-12 h-12 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full flex justify-center items-center z-20 cursor-pointer transition-transform duration-300 ease-in-out"
              style={{
                pointerEvents: 'auto',
              }}
            >
              <img src={githubImage} alt="github" className="w-6 h-6 object-contain" />
            </button>
          </div>
        </div>

        {/* Project Info */}
        <div className="flex flex-col justify-between flex-1 w-full mt-4">
          <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
          <p className="mt-2 text-gray-300 text-[14px] text-center">{description}</p>
          <motion.div
            className="mt-4 flex flex-wrap justify-center gap-2"
            initial="hidden"
            animate="show"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag.name}
                custom={i}
                variants={fadeIn('', i * 0.2)}
                className={`text-sm font-medium ${tag.color}`}
              >
                #{tag.name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};


export default Projects;
