"use client";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[320px] h-[400px] max-w-full flex-shrink-0"
            key={item.name}
          >
            <FeedbackCard
              testimonial={item.testimonial}
              name={item.name}
              designation={item.designation}
              company={item.company}
              image={item.image}
              link={item.link}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

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
