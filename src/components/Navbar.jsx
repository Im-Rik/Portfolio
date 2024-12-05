import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { logo2, menu, close } from '../assets';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-gray-900 px-6">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <LogoSection setActive={setActive} />
        <NavLinks active={active} setActive={setActive} />
        <MenuIcon toggle={toggle} setToggle={setToggle} />
        <MobileMenu toggle={toggle} setToggle={setToggle} active={active} setActive={setActive} />
      </div>
    </nav>
  );
};

const LogoSection = ({ setActive }) => (
  <Link
    to="/"
    className="flex items-center gap-2"
    onClick={() => {
      setActive('');
      window.scrollTo(0, 0);
    }}
  >
    <img src={logo2} alt="logo" className="w-9 h-9 object-contain" />
    <p className="text-white text-[18px] font-bold cursor-pointer flex">
      Sourik&nbsp;<span className="sm:block hidden">| Ray</span>
    </p>
  </Link>
);

const NavLinks = ({ active, setActive }) => (
  <ul className="list-none hidden sm:flex flex-row gap-10">
    {navLinks.map((link) => (
      <motion.li
        key={link.id}
        whileHover={{ scale: 1.1 }}
        className={`${
          active === link.title ? 'text-white' : 'text-gray-200'
        } hover:text-white text-[18px] font-medium cursor-pointer`}
        onClick={() => setActive(link.title)}
      >
        <a href={`#${link.id}`}>{link.title}</a>
      </motion.li>
    ))}
  </ul>
);

const MenuIcon = ({ toggle, setToggle }) => (
  <div className="sm:hidden flex flex-1 justify-end items-center">
    <img
      src={toggle ? close : menu}
      alt="menu"
      className="w-[28px] h-[28px] object-contain cursor-pointer"
      onClick={() => setToggle(!toggle)}
    />
  </div>
);

const MobileMenu = ({ toggle, setToggle, active, setActive }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -10 }}
    className={`${
      toggle ? 'flex' : 'hidden'
    } p-6 bg-gradient-to-r from-gray-800 to-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
  >
    <ul className="list-none flex flex-col gap-4">
      {navLinks.map((link) => (
        <motion.li
          key={link.id}
          whileHover={{ scale: 1.1 }}
          className={`${
            active === link.title ? 'text-white' : 'text-gray-200'
          } font-medium cursor-pointer text-[16px]`}
          onClick={() => {
            setToggle(!toggle);
            setActive(link.title);
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default Navbar;
