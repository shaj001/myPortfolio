import { useRef } from "react";
import { Globe } from "../components/globe.jsx";
import CopyEmailButton from "../components/CopyEmailButton.jsx";
import { Frameworks } from "../components/Frameworks.jsx";
import ViewResumeButton from "../components/ViewResumePopup.jsx";
import { mySocials } from "../constants/myData.js";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "public/resume.pdf";
    link.download = "Sharad_Resume.pdf";
    link.click();
  };

  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="blur-[0.8px] absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] "
          />
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          <div className=" top flex  z-10  flex-col gap-6">
            <p className="headtext">Hi, I'm SHARAD KUMAR</p>

            <div className="subtext text-white flex flex-col gap-4">
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
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div
          className=" grid-2 border border-indigo-500/20
  shadow-xl shadow-indigo-900/30 rounded-2xl"
        >
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <img
              src="../assets/boxgbg2.jpg"
              alt="blockBg"
              className="w-full h-full object-cover "
            />
            <p className="absolute top-6 left-6 text-white font-medium">
              MY RESUME
            </p>
            <p className="absolute bottom-6 left-6 text-white font-medium"></p>

            <div className="absolute bottom-7 right-4 flex flex-col justify-center items-center gap-4">
              <button
                className="flex justify-center items-center gap-2 text-[9px] md:text-base bg-gray-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:-translate-y-1 duration-200 hover:bg-indigo-700  active:scale-60 
               transition duration-100 ease-in-out active:bg-indigo-700"
                onClick={downloadResume}
              >
                Download Resume
                <img
                  src="public/assets/logos/downloadIcon.png"
                  alt=""
                  className="w-auto h-4 invert"
                />
              </button>
              <ViewResumeButton />
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm from India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="  grid-special-color grid-4">
          <div className="top-5 flex flex-col items-center">
            <p className="text-lg md:text-xl font-medium">
              Do you want to start a project together?
            </p>

            <div className="mt-6">
              <CopyEmailButton />
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <p className="text-white text-center">connect with me</p>

            <div className="flex justify-center gap-6 mt-2 ">
              {mySocials.map((social, index) => (
                <a href={social.href} key={index} target="_blank">
                  <img
                    src={social.icon}
                    className="w-5 h-5 cursor-pointer hover:-translate-y-1 duration-200  active:scale-60 transition duration-100 ease-in-out"
                    alt={social.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="text-xl md:text-2xl">Tech Stack</p>
            <p className="subtext pt-3">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
