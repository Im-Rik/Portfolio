import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "John Doe 1",
    testimonial: "This is an amazing product. It really helped me in my work, and I highly recommend it!",
    designation: "Software Engineer",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    link: "https://linkedin.com",
  },
  {
    name: "Jane Smith 2",
    testimonial: "I have been using this product for a few months now, and it has truly exceeded my expectations.",
    designation: "Product Manager",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    link: "https://linkedin.com",
  },
  {
    name: "John Doe 3",
    testimonial: "This is an amazing product. It really helped me in my work, and I highly recommend it!",
    designation: "Software Engineer",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    link: "https://linkedin.com",
  },
  {
    name: "Jane Smith 4",
    testimonial: "I have been using this product for a few months now, and it has truly exceeded my expectations.",
    designation: "Product Manager",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    link: "https://linkedin.com",
  },
  {
    name: "John Doe 5",
    testimonial: "This is an amazing product. It really helped me in my work, and I highly recommend it!",
    designation: "Software Engineer",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    link: "https://linkedin.com",
  },
  {
    name: "Jane Smith 6",
    testimonial: "I have been using this product for a few months now, and it has truly exceeded my expectations.",
    designation: "Product Manager",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    link: "https://linkedin.com",
  },
];

const FeedbackCard = ({ testimonial, name, designation, company, image, link }) => (
  <div className="flex-shrink-0 w-[320px] h-[400px] bg-black-200 p-8 rounded-3xl border-2 border-gray-300 shadow-lg flex flex-col justify-between">
    <p className="text-white font-black text-[48px]">"</p>
    <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
    <div className="flex items-center justify-between gap-3 mt-4">
      <div className="flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span>
          {name}
        </p>
        <p className="text-secondary text-[14px]">
          {designation}, {company}
        </p>
        <div
          onClick={() => window.open(link, "_blank")}
          className="text-secondary text-[12px] mt-2 hover:text-blue-500 cursor-pointer"
        >
          Contact
        </div>
      </div>
      <img 
        src={image} 
        alt={name} 
        className="w-12 h-12 rounded-full object-cover border-2 border-gray-300" 
      />
    </div>
  </div>
);

const FeedbackCarousel = () => {
    const animationControls = useAnimation();
    const carouselRef = useRef(null);
    const [currentOffset, setCurrentOffset] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

  
    // Generate a larger array with repeated sets of the testimonials
    const extendedTestimonials = Array.from(
      { length: 5 }, // Repeat 5 times
      () => testimonials
    ).flat();
  
    useEffect(() => {
        const cardWidth = 320 + 24; // Card width (320px) + gap (24px)
        const totalWidth = cardWidth * testimonials.length * 5;
      
        const animateCarousel = async () => {
          await animationControls.start({
            x: `-${totalWidth}px`,
            transition: { duration: 300, ease: "linear" },
          });
      
          // Reset position after animation ends
          animationControls.set({ x: 0 });
          animateCarousel(); // Restart the animation
        };
      
        animateCarousel();
      }, [animationControls]);
      
  
    return (
      <div className="relative w-full overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex gap-6 flex-nowrap"
          animate={animationControls}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <FeedbackCard key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    );
  };
  
const Feedbacks = () => {
  return (
    <section className="relative w-full min-h-screen h-auto bg-gradient-to-b from-blue-950 via-black to-gray-950 text-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-16 py-10">
        <div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0, transition: { duration: 1 } },
            }}
            className="space-y-4"
          >
            <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-gray-400 font-mono">
              What others say
            </p>
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
              Testimonials.
            </h2>
          </motion.div>
        </div>

        <div className="mt-8">
        <FeedbackCarousel />
        </div>

        
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-10 lg:hidden">
          <a href="#about">
            <div className="w-[30px] h-[60px] rounded-3xl border-4 border-purple-500 flex justify-center items-center">
              <motion.div
                animate={{ y: [0, 23, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-purple-500 mb-1"
              />
            </div>
          </a>
        </div>

    </section>
  );
};

export default Feedbacks;