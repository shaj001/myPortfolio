import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-10 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-2xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm 
        </motion.h1>
         <motion.h1
          className="text-5xl font-bold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          SHARAD KUMAR
        </motion.h1>
        <motion.h3 
        className="text-2xl font-medium text-neutral-300"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        >
          AKA: "Sherry Keos"
        </motion.h3>



        <div className="mt-8 flex flex-col items-start">
          <motion.p
            className="text-3xl font-medium text-neutral-200 drop-shadow-[0_0_1px_black]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>




          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-neutral-200 text-6xl drop-shadow-[0_0_1px_black]"
            />
          </motion.div>
          <motion.p
            className="text-3xl font-medium text-neutral-300 drop-shadow-[0_0_1px_black]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Solutions
          </motion.p>
        </div>
      </div>




      {/* Mobile View */}
      <div className="mt-10 flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-2xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,I'm
        </motion.p>
        <motion.h1
          className="text-5xl font-bold"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          SHARAD <br/> KUMAR
        </motion.h1>


        <motion.h3 
        className="text-2xl font-medium text-neutral-300"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        >
          AKA: "Sherry Keos"
        </motion.h3>


       <div className="mt-1 flex flex-col items-start">
          <motion.p
            className="text-5xl font-bold text-neutral-100"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> <span className=" text-3xl  text-white drop-shadow-[0_0_5px_black]">Dedicated to Crafting</span>
          </motion.p>


          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="mt-6 font-bold text-white text-5xl drop-shadow-[0_0_5px_black]"
            />
          </motion.div>
          <motion.p
            className="text-2xl font-black text-neutral-300 drop-shadow-[0_0_5px_black]"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
