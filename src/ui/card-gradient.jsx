import React from "react";
import { motion } from "framer-motion";
import githubImage from "../assets/github.png";


export const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        

      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative group bg-gradient-to-br from-slate-700 via-sky-800 to-yellow-800 p-[3px] rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
      >
        
        <div className="bg-gray-950 rounded-3xl p-5 flex flex-col h-full">
          {/* Project Image */}
          <div className="relative w-full h-[200px] rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-slate-700 via-sky-800 to-yellow-800 p-[3px]">
            <div className="w-full h-full bg-gray-950 rounded-xl">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 flex justify-end items-start p-2">
              <div className="bg-gradient-to-br from-slate-700 via-sky-800 to-yellow-800 p-[2px] rounded-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(source_code_link, "_blank");
                  }}
                  className="w-10 h-10 bg-black bg-opacity-70 hover:bg-opacity-90 rounded-full flex justify-center items-center transition-all duration-300"
                >
                  <img src={githubImage} alt="github" className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
  
          {/* Project Info */}
          <h3 className="text-white text-lg font-bold mb-2">{name}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={tag.name}
                className={`text-sm font-medium px-3 py-1 rounded-full bg-gray-800 border border-slate-700 ${tag.color} font-mono`}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
        
      </motion.div>
    );
  };