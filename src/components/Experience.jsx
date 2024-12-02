import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Experience Data
const experiences = [
  {
    title: 'Vidyanagar Multipurpose School',
    company_name: 'South 24 pgs.',
    icon: 'https://via.placeholder.com/64', // Replace with actual icon URL
    iconBg: '#383E56',
    date: 'January 2012 - March 2020',
    points: [
      'Scored 91.7% in the 10th-grade board examinations',
      'Chose PCMB for higher secondary education',
      'Scored 93.4% in the 12th-grade board examinations',
    ],
  },
  {
    title: 'Netaji Subhas Engineering College',
    company_name: 'Kolkata',
    icon: 'https://via.placeholder.com/64', // Replace with actual icon URL
    iconBg: '#E6DEDD',
    date: 'September 2021 - July 2025',
    points: [
      'Secured 8.63 CGPA upto 6th Semester',
      'Ex-member of GNX Club, The official Tech club of CSE',
      'Have learnt multiple tech-stack including React, Express, Node, EJS, Tailwind, CPP',
    ],
  },
];

// Animation Variants
const textVariant = (delay = 0) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full ">
        <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-[16px] font-semibold sm:text-[18px] text-[14px] text-secondary tracking-wider text-gray-400 font-mono" style={{ margin: 3 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <section className="relative w-full min-h-screen h-auto bg-gradient-to-b from-gray-950 via-slate-950 to-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10">

            <motion.div variants={textVariant()} initial="hidden" animate="show" className="space-y-4">
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-gray-400 font-mono">What I have done so far</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                  {experiences.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience} />
                  ))}
                </VerticalTimeline>
            </div>

        </div>

    </section>
  );
};

export default Experience;
