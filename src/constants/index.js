import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    rudra,
    riddhi,
    mayukh,
    anik,
    harshit,
    sourav,
    studynotion,
    vstream,
    blogify
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Web Designer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const educations = [
    {
      title: 'Vidyanagar Multipurpose School',
      institute_name: 'South 24 pgs.',
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
      institute_name: 'Kolkata',
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
  
  const testimonials = [
    {
      testimonial:
        "Collaborative and enthusiastic developer based in Kolkata, passionate about creating innovative solutions.",
      name: "Riddhi Mondol",
      designation: "Leader",
      company: "SIH Hackathon",
      image: riddhi,
      link: "https://www.linkedin.com/in/riddhi-mondal-659b91222/"
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about his projects like Sourik does.",
      name: "Anik Adhikari",
      designation: "SDE-1",
      company: "TCS",
      image: anik,
      link: "https://www.linkedin.com/in/anikadhikari/"
    },
    {
      testimonial:
        "Highly cooperative and always open to listening, valuing diverse perspectives and fostering effective communication.",
      name: "Rudranil Bhattacharjee",
      designation: "Influencer",
      company: "Youtube",
      image: rudra,
      link: "https://www.linkedin.com/in/rudranilbhattacharjee/"
    },
    {
      testimonial:
        "Sourik's incredible typing speed shines in coding and Valorant, showcasing his technical and gaming prowess.",
      name: "Mayukh Ganguly",
      designation: "Millionaire",
      company: "Freelancer",
      image: mayukh,
      link: "https://www.linkedin.com/in/sourik-roy-0755561b1/"
    },
    {
      testimonial:
        "An enthusiastic developer who collaborates well and values different perspectives in every project.",
      name: "Sourav Ghorai",
      designation: "Topper",
      company: "NSEC",
      image: sourav,
      link: "https://www.linkedin.com/in/souravghorai/"
    },
    {
      testimonial:
        "His enthusiasm, collaborative spirit, and fast problem-solving skills makes him a standout developer.",
      name: "Harshit Narayan Trivedi",
      designation: "Python Instructor",
      company: "Youtube",
      image: harshit,
      link: "https://www.linkedin.com/in/harshit-narayan-trivedi-75b1a4220/"
    },
  ];
  
  const projects = [
    {
      name: "Vstream",
      description:
        "Vstream is a fully functional video streaming platform built using the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS). It enables users to create and consume video content, aiming to deliver a seamless and engaging video experience.",
      tags: [
        {
          name: "mongodb",
          color: "text-green-500",
        },
        {
          name: "expressjs",
          color: "text-blue-400",
        },
        {
          name: "react",
          color: "text-green-500",
        },
        {
          name: "nodejs",
          color: "text-red-300",
        },
      ],
      image: vstream,
      source_code_link: "https://github.com/im-rik/vstream",
    },
    {
      name: "Blogify",
      description:
        "Blogify is a blogging platform built using the EJS, NodeJS, MongoDB, ExpressJS following MVC architecture. EJS enables server-side rendering enabling a higher SEO score and seamless delevery of content",
        tags: [
          {
            name: "mongodb",
            color: "text-green-500",
          },
          {
            name: "expressjs",
            color: "text-blue-400",
          },
          {
            name: "EJS",
            color: "text-green-500",
          },
          {
            name: "nodejs",
            color: "text-red-300",
          },
        ],
      image: blogify,
      source_code_link: "https://github.com/Im-Rik/BlogSmith",
    },
    {
      name: "Studynotion",
      description:
        "Studynotion is a fully functional Ed-tech platform built using the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS). It enables users to create and consume Educational content, aiming to deliver a seamless and engaging Educational experience.",
        tags: [
          {
            name: "mongodb",
            color: "text-green-500",
          },
          {
            name: "expressjs",
            color: "text-blue-400",
          },
          {
            name: "react",
            color: "text-green-500",
          },
          {
            name: "nodejs",
            color: "text-red-300",
          },
        ],
      image: studynotion,
      source_code_link: "https://github.com/Mayukh-Ganguly01/EdtechPlatform",
    },
  ];
  
  export { services, technologies, educations, testimonials, projects };
  