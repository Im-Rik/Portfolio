import React from 'react';
import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {educations} from '../constants'


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

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={education.date}
    iconStyle={{ background: education.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full ">
        <img src={education.icon} alt={education.institute_name} className="w-[80%] h-[80%] object-contain" />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{education.title}</h3>
      <p className="text-[16px] font-semibold sm:text-[18px] text-[14px] text-secondary tracking-wider text-gray-400 font-mono" style={{ margin: 3 }}>
        {education.institute_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {education.points.map((point, index) => (
        <li key={`education-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <section className="relative w-full min-h-screen h-auto bg-gradient-to-b from-gray-950 via-slate-950 to-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-16 py-10">

            <motion.div variants={textVariant()} initial="hidden" animate="show" className="space-y-4">
                <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-gray-400 font-mono">What I have done so far</p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Education.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                  {educations.map((education, index) => (
                    <EducationCard key={index} education={education} />
                  ))}
                </VerticalTimeline>
            </div>

        </div>

    </section>
  );
};

export default Education;
