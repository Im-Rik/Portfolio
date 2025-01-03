import React from "react";
import { FaFacebook, FaTwitter, FaMedium, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">

        <div className="relative z-10 text-center">
          <h3 className="text-2xl font-bold text-white">Let's Connect!</h3>
          <p className="text-gray-400 mt-4">
            ------------------------------------------------
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-6">
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} className="hover:text-blue-600 transition-all" />
            </a> */}
            <a href="https://x.com/@sourik2002" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} className="hover:text-blue-400 transition-all" />
            </a>
            <a href="https://medium.com/@Im_Rik" target="_blank" rel="noopener noreferrer">
              <FaMedium size={30} className="hover:text-orange-600 transition-all" />
            </a>
            <a href="https://www.linkedin.com/in/sourik-roy-0755561b1/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} className="hover:text-blue-700 transition-all" />
            </a>
            <a href="https://github.com/Im-Rik/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} className="hover:text-pink-600 transition-all" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sourik Ray. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
