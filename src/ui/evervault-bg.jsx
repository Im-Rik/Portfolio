"use client";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const BackgroundComponent = ({ className }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
    setRandomString(generateRandomString(15000));
  }

  function onMouseLeave() {
    mouseX.set(-9999); // Move the effect off-screen
    mouseY.set(-9999);
  }
  

  return (
    <div 
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`absolute overflow-hidden w-full h-full ${className}`}
    >
      <BackgroundPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
    </div>
  );
};

const BackgroundPattern = ({ mouseX, mouseY, randomString }) => {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <>
      <motion.div 
  className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-700 opacity-100 hover:opacity-90 backdrop-blur-xl transition duration-500"
  style={style}
/>

      <motion.div
        className="absolute inset-0 opacity-0 mix-blend-overlay hover:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </>
  );
};

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomString = (length) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default BackgroundComponent;
