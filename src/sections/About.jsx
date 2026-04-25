import { useRef } from "react";
import { Globe } from "../components/Globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { Frameworks } from "../components/Frameworks.jsx";
import ViewResumeButton from "../components/ViewResumePopup.jsx";
import { mySocials } from "../constants/myData.js";
import MagicBento from "../components/MagicBento.jsx";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Sharad_Resume.pdf";
    link.click();
  };

  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[16rem] mt-12">
        {/* Grid 1 */}
        <MagicBento
          className=" p-6 border border-purple-500/20 shadow-xl shadow-indigo-900/30 rounded-2xl grid-1"
          particleCount={12}
          glowColor="132,0,255"
          clickEffect
        >
          <div className=" top flex  z-10  flex-col gap-6">
            <p className="headtext">Hi, I'm SHARAD KUMAR</p>

            <div className="subtext text-gray-400 flex flex-col gap-4">
              <p>
                I’m a Computer Science undergraduate focused on building
                scalable digital products and intelligent systems. My work spans
                backend engineering, web platforms, and AI-driven applications.
              </p>
              <p>
                I work primarily with Python, C++, and JavaScript, with hands-on
                experience in building full-stack systems using Node.js and
                MongoDB. Alongside software development, I’m deeply interested
                in Aerospace computing, Mathematical modeling, and advanced
                engineering problems.
              </p>
              <p>
                Currently, I’m building product-oriented platforms and exploring
                the intersection of AI, physics, and large-scale system design.
                My long-term goal is to contribute to high-impact engineering
                projects in aerospace and intelligent automation.
              </p>
            </div>
          </div>
        </MagicBento>

        {/* Grid 2 */}
        <MagicBento
          className="p-6 rounded-2xl border border-purple-500/20 shadow-xl shadow-indigo-900/30 grid-2"
          particleCount={12}
          glowColor="132,0,255"
          clickEffect
        >
          <div className="z-10 m w-[40%]">
            <p className="text-sm md:text-lg text-neutral-300">Tech Stack</p>
            <p className="text-neutral-400 text-xs md:text-sm text-pretty pt-3  ">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[45%] md:scale-120">
            <Frameworks />
          </div>
        </MagicBento>

        {/* Grid 3 */}
        <MagicBento
          className="p-6 rounded-2xl border border-purple-500/20 shadow-xl shadow-indigo-900/30 grid-3"
          particleCount={12}
          glowColor="132,0,255"
          clickEffect
        >
          <div className="z-10 w-[50%]">
            <p className=" mb-2 text-neutral-300 text-sm md:text-lg">
              Time Zone
            </p>
            <p className="text-neutral-400 text-sm md:text-sm text-pretty">
              I'm from India, and open to remote work worldwide
            </p>
          </div>
        <figure className="absolute left-[35%] top-[-1%] w-[20rem] sm:w-[30rem]">
            <Globe />
          </figure>
        </MagicBento>

        {/* Grid 4 */}
        <MagicBento
          className="p-4 rounded-2xl border border-purple-500/20 shadow-xl shadow-indigo-900/30 row-span-1 md:col-span-6 h-full md:h-[6rem] relative overflow-hidden hover:-translate-y-1 duration-200 flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-14"
          particleCount={12}
          glowColor="132,0,255"
          clickEffect
        >

         
         <div className="flex flex-col justify-center items-center order-2 md:order-1">
            <p className="text-neutral-400 text-center text-sm  md:text-[16px]">Connect with Me</p>
            <div className="flex justify-center gap-6 mt-3">
              {mySocials.map((social, index) => (
                <a href={social.href} key={index} target="_blank">
                  <img
                    src={social.icon}
                    className="w-5 h-5 cursor-pointer hover:-translate-y-1 duration-200 active:scale-60 transition duration-100 ease-in-out opacity-70"
                    alt={social.name}
                  />
                </a>
              ))}
            </div>
          </div>

          

          <div className=" flex flex-col justify-center items-center order-3 md:order-2">
            <p className="text-neutral-400 text-sm md:text-[16px] text-center">Do you want to start a project together?</p>
            <div className="mt-1 w-full flex justify-center ">
              <CopyEmailButton />
            </div>
          </div>

         <div className="flex flex-col gap-2 justify-center items-center order-1 md:order-3">
            <div className="text-neutral-400 text-sm  md:text-[16px]"><p>My Resume</p></div>
            <div className="flex justify-center items-center gap-2 w-full">
              <button
                className="flex justify-center items-center md:text-base border border-purple-500/40 shadow-xl shadow-indigo-900/30 text-white px-4 py-2 rounded-2xl cursor-pointer hover:-translate-y-1 hover:bg-indigo-700 active:scale-95 active:bg-indigo-700 transition duration-150 ease-in-out"
                onClick={downloadResume}
              >
                <img
              src="/assets/Icons/otherIcons/downloadIcon.png"
                  alt="Download"
                  className="w-auto h-4 invert opacity-70"
                />
              </button>
              <ViewResumeButton />
            </div>
          </div>

        </MagicBento>
      </div>
    </section>
  );
};

export default About;
