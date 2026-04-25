import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import TextType from "./TextType.jsx";
import GradientText from "./GradientText";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-50  mt-60 text-center md:mt-60 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-2xl font-medium mb-3"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm
        </motion.h1>
        <motion.h1
          className="text-5xl font-stretch-125% text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-orange-300"
          style={{ fontFamily: "'Satisfy', cursive" }}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B497CF"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            SHARAD KUMAR
          </GradientText>
        </motion.h1>
        <motion.h3
          className="text-2xl font-medium text-indigo-300 mt-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          <span className="text-lg text-neutral-500">AKA:</span> <span className="text-neutral-400" style={{ fontFamily: "'Orbitron', sans-serif" }}>"Sherry Keos"</span>
          <TextType
            className="ml-8 text-lg mt-2"
            text={[
              "A Designer",
              "A Builder",
              "A Creator",
              "A Problem Solver",
              "A Delusional Dreamer",
            ]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </motion.h3>

        <div className="mt-8 flex flex-col items-start">
          <motion.p
            className="text-2xl font-medium text-neutral-200 drop-shadow-[0_0_1px_black]"
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
              className="font-black text-white mt-2 mb-2 text-5xl drop-shadow-[0_0_1px_black]"
            />
          </motion.div>
          <motion.p
            className="text-2xl font-medium text-neutral-300 drop-shadow-[0_0_1px_black]"
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
      <div className=" flex flex-col items-center justify-center w-full space-y-6 md:hidden text-center">
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
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400"
          style={{ fontFamily: "'Satisfy', cursive" }}
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <GradientText
            colors={["#5227FF", "#FF9FFC", "#B497CF"]}
            animationSpeed={8}
            showBorder={false}
            className="custom-class"
          >
            {/* <span className="text-5xl">SHARAD<br /> KUMAR</span>  */}
            SHARAD
          </GradientText>
        </motion.h1>

        <motion.h3
          className="text-lg font-medium text-indigo-400"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
           <span className="text-neutral-400" style={{ fontFamily: "'Orbitron', sans-serif" }}>AKA: "Sherry Keos"</span> <br/>
          <TextType
            className=" text-lg mt-1"
            text={[
              "A Designer",
              "A Builder",
              "A Creator",
              "A Problem Solver",
              "A Delusional Dreamer",
            ]}
            typingSpeed={60}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </motion.h3>

        <div className="mt-1 flex flex-col items-center w-full">
          <motion.p
            className="text-xl font-bold text-neutral-100"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer <br />{" "}
            <span className=" text-xl  text-white drop-shadow-[0_0_5px_black]">
              Dedicated to Crafting
            </span>
          </motion.p>

          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="flex items-center justify-center w-full"
          >
            <FlipWords
              words={words}
              className="mt-3 font-bold text-white text-4xl drop-shadow-[0_0_5px_black]"
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
