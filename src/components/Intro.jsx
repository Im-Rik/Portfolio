import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

const Intro = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-black overflow-hidden">
      
      <div>

        <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 px-6 sm:px-16">  {/* Wrapps left line & Intro text */}

          {/* Left Line & Circle */}
          <div className="flex flex-col justify-center items-center mt-5">
            {/* <div className="w-5 h-5 rounded-full bg-[#915eff]" /> */}
            <motion.div
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-5 h-5 rounded-full bg-[#915eff]"
            />
            <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent" />
            {/* <motion.div
              animate={{ height: [100, 150, 100] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent"
            /> */}
          </div>

          {/* Intro Text */}
          <div className="relative z-10">
            <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
              Hi, It's <span className="text-[#915eff]">Sourik</span>
            </h1>
            <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
              Crafting innovative digital experiences with
              <br className="sm:block hidden" />
              <span className="text-[#915eff] font-semibold">code</span> and{' '}
              <span className="text-[#915eff] font-semibold">creativity</span>.
            </p>
          </div>


        </div>


        {/* Lottie Animation */}
        <div className="absolute inset-0 flex items-center justify-center sm:justify-end pointer-events-none">
          <Player
            autoplay
            loop
            src="https://lottie.host/8a8c6d6c-639b-4507-a3cc-2f7423231461/AtSjHmqvbj.json"
            className="w-full max-w-[300px] sm:max-w-[500px] lg:max-w-[700px] sm:mr-10 sm:relative sm:right-10"
          />
        </div>

      </div>
 

      {/* Scroll Indicator */}
      <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[30px] h-[60px] rounded-3xl border-4 border-purple-500 flex justify-center items-center">
            <motion.div
              animate={{ y: [0, 23, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-purple-500 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Intro;
