"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";

const Banner = () => (
  <section className="relative w-full mx-auto overflow-hidden">
    <LampContainer>
      <AnimatedHeading />
    </LampContainer>
    <ScrollIndicator />
  </section>
);

const AnimatedHeading = () => (
  <motion.h1
    initial={{ opacity: 0.5, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      delay: 0.3,
      duration: 0.8,
      ease: "easeInOut",
    }}
    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
  >
    <div>
      <h1 className="text-white">HELLO</h1>
      <h1>I AM SOURIK</h1>
    </div>
  </motion.h1>
);

const ScrollIndicator = () => (
  <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-10">
    <a href="#overview">
      <div className="w-[30px] h-[60px] rounded-3xl border-4 border-slate-400 flex justify-center items-center">
        <motion.div
          animate={{ y: [0, 23, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-3 h-3 rounded-full bg-slate-400 mb-1"
        />
      </div>
    </a>
  </div>
);

export default Banner;
