import { useState } from "react";
import { motion } from "motion/react";
function Navigation() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a
          className="nav-link m-2 cursor-pointer "
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link m-2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          About
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link m-2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          Skills
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link m-2 cursor-pointer"
          onClick={() => scrollToSection("project")}
        >
          Project
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link m-2 cursor-pointer"
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a
          className="nav-link m-2 cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[80%] rounded-2xl backdrop-blur-lg bg-primary/40 border border-white/10">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className=" m-1 text-2xl font-bold transition-colors text-neutral-300 hover:text-violet-300"
          >
            Sherry
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
