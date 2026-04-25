import { useState } from "react";
import { motion } from "motion/react";
import BgMusic from "../components/BgMusic.jsx";
import { X } from 'lucide-react';


const NavLinks = ({ links, onClick }) => (
  <ul className="flex flex-col sm:flex-row items-center list-none p-0 m-0">
    {links.map((link) => (
      <li key={link.id} className="nav-li">
        <a
          className="nav-link m-10 cursor-pointer text-neutral-400 hover:text-white transition-colors"
          onClick={() => onClick(link.id)}
        >
          {link.label}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const leftLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
  ];

  const rightLinks = [
    { id: "project", label: "Project" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <>
    <div className=" fixed top-3 left-1/2 -translate-x-1/2 z-50 py-1 sm:py-0 w-[90%] sm:w-[75%] rounded-2xl backdrop-blur-lg  border border-white/20 shadow-lg shadow-[#2A0E61]/60 ">

      <div className=" px-5 mx-auto w-full ">
        <div className="flex items-center justify-between relative">

          {/* MOBILE LOGO (Only shows on small screens) */}
          <a href="/" className="mb-1 sm:hidden text-xl font-bold text-neutral-300">
            Sherry
          </a>

          {/* DESKTOP NAV: LEFT SIDE */}
          <nav className="hidden sm:flex flex-1 justify-end ">
            <NavLinks links={leftLinks} onClick={scrollToSection} />
          </nav>

          {/* CENTER LOGO (Desktop) */}
          <a
            href="/"
            className="hidden sm:block mx-15 text-3xl font-bold transition-colors text-neutral-300 hover:text-violet-300 shrink-0"
          >
            Sherry
          </a>

          {/* DESKTOP NAV: RIGHT SIDE */}
          <nav className="hidden sm:flex flex-1 justify-start">
            <NavLinks links={rightLinks} onClick={scrollToSection} />
          </nav>

          <div className="flex items-center gap-4">
            <BgMusic />
            
            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            >
              <img
              src={isOpen ? "assets/Icons/otherIcons/close.svg" : "assets/Icons/otherIcons/menu.svg"}
                className="w-6 h-6"
                alt="toggle"
              />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden border-t border-white/5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="py-5 flex flex-col items-center gap-2">
            <NavLinks
              links={[...leftLinks, ...rightLinks]}
              onClick={scrollToSection}
            />
          </nav>
        </motion.div>
      )}
    </div>

    </>
  );
};

export default Navbar;
