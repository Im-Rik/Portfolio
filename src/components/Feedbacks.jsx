"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import {testimonials} from "../constants"
 
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
          <InfiniteMovingCards items={testimonials} direction="left" speed="slow" /> {/** "fast" | "normal" | "slow" */} 
        </div>
        
      </div>

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-10 sm:hidden">
          <a href="#contact">
            <div className="w-[30px] h-[60px] rounded-3xl border-4 border-gray-400 flex justify-center items-center">
              <motion.div
                animate={{ y: [0, 23, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-gray-300 mb-1"
              />
            </div>
          </a>
        </div>

    </section>
  );
};

export default Feedbacks;