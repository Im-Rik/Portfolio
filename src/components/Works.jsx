import React from 'react';
import { motion } from 'framer-motion';

// Example project data (replace with actual project information)
const projects = [
  {
    name: 'Project One',
    description: 'A web application that does amazing things.',
    tags: [{ name: 'React', color: 'text-blue-500' }, { name: 'Node.js', color: 'text-green-500' }],
    image: 'https://via.placeholder.com/360x230',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Project Two',
    description: 'An innovative solution for modern problems.',
    tags: [{ name: 'JavaScript', color: 'text-yellow-500' }, { name: 'MongoDB', color: 'text-green-600' }],
    image: 'https://via.placeholder.com/360x230',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Project Three',
    description: 'A creative approach to a challenging problem.',
    tags: [{ name: 'Python', color: 'text-blue-400' }, { name: 'Flask', color: 'text-orange-500' }],
    image: 'https://via.placeholder.com/360x230',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Project One',
    description: 'A web application that does amazing things.',
    tags: [{ name: 'React', color: 'text-blue-500' }, { name: 'Node.js', color: 'text-green-500' }],
    image: 'https://via.placeholder.com/360x230',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Project Two',
    description: 'An innovative solution for modern problems.',
    tags: [{ name: 'JavaScript', color: 'text-yellow-500' }, { name: 'MongoDB', color: 'text-green-600' }],
    image: 'https://via.placeholder.com/360x230',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Project Three',
    description: 'A creative approach to a challenging problem.',
    tags: [{ name: 'Python', color: 'text-blue-400' }, { name: 'Flask', color: 'text-orange-500' }],
    image: 'https://via.placeholder.com/360x230',
    source_code_link: 'https://github.com/',
  },
];


// Animation Variants
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

// Alternate bounce animation
const bounceAnimation = (index) => ({
  animate: {
    y: index % 2 === 0 ? [0, -10, 0, 10, 0] : [0, 10, 0, -10, 0], // Alternating bounce
    transition: {
      duration: 4, // Duration of one full cycle
      ease: 'linear',
      repeat: Infinity, // Continuous bounce
    },
  },
  hover: {
    y:0,
    scale: 1.1, // Slight zoom on hover
    transition: {
      duration: 0.3,
    },
  },
  whileTap: {
    scale: 0.95, // Shrink effect on click
  },
});

const tagAnimation = {
  hidden: { opacity: 0, y: 10 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + index * 0.1,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
};

const Works = () => {
  return (
    <section
      id="project"
      className="relative w-full min-h-screen h-auto bg-gradient-to-b from-slate-950 via-gray-950 to-blue-950 text-white overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-16 py-10">
        {/* Introduction Text */}
        <motion.div variants={fadeIn('', 0, 1)} className="space-y-4">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-gray-400 font-mono">
            My Works
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-[19px] max-w-3xl leading-[30px]"
        >
          Explore my work to see how I apply my skills and creativity to solve complex problems and create impactful
          solutions. Each project reflects a commitment to technical excellence and user-centered design.
        </motion.p>

        {/* Projects Section */}
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
      whileTap="whileTap"
      className="relative xs:w-[300px] w-full bg-gradient-to-b from-gray-800 to-indigo-900 rounded-xl p-[2px] shadow-lg"
    >
      <div className="bg-gray-900 rounded-xl py-5 px-6 min-h-[360px] flex flex-col items-center text-center">
        {/* Project Image */}
        <div className="relative w-full h-[200px] rounded-t-xl overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 flex justify-end m-2">
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className="bg-black bg-opacity-50 hover:bg-opacity-80 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src="https://via.placeholder.com/24" alt="github" className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <h3 className="mt-4 text-white text-[20px] font-bold">{name}</h3>
        <p className="mt-2 text-gray-300 text-[14px]">{description}</p>
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
              variants={tagAnimation}
              className={`text-sm font-medium ${tag.color}`}
            >
              #{tag.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Works;
