import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaPython, FaGithub, FaLinux, FaFigma    } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiThealgorithms,
  SiMongodb,
  SiExpress,
  SiSocketdotio,
  SiStreamlit,
  SiLangchain 

} from "react-icons/si";

import { 
  TbBrandThreejs, 
  TbBrandFramerMotion, 
  TbBrandCpp,
  TbBinaryTree 
 } from "react-icons/tb";

 import { GrSystem } from "react-icons/gr";

 import { DiResponsive } from "react-icons/di";

import { VscDebugAll } from "react-icons/vsc";
import { RiVercelLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";


import { Code2, Terminal, Shield, Cloud } from "lucide-react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      id: 0,
      name: "Web Dev",
      type: "grouped",
      groups: [
        {
          title: "Frontend",
          skills: [
            { name: "React", icon: <FaReact /> },
            { name: "Next.js", icon: <SiNextdotjs /> },
            { name: "Tailwind", icon: <SiTailwindcss /> },
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "Framer Motion", icon: <TbBrandFramerMotion /> },
            { name: "Three.js", icon: <TbBrandThreejs /> },
            { name: "streamlit", icon: <SiStreamlit /> },
    
          ],
        },
        {
          title: "Backend",
          skills: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express.js", icon: <SiExpress  /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MongoDB", icon: <SiMongodb  /> },
            { name: "Rest API", icon: <Code2 /> },
            { name: "WebSockets", icon: <Terminal /> },
            { name: "Authentication", icon: <Shield /> },
          ],
        },
      ],
    },
    {
      id: 1,
      name: "Core skills",
      type: "flat",
      skills: [
        { name: "Cpp", icon: <TbBrandCpp /> },
        { name: "Python", icon: <FaPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "System Design", icon: <GrSystem /> },
        { name: "Problem Solving (DSA)", icon: <TbBinaryTree /> },
      ],
    },
    {
      id: 2,
      name: "Other Tools",
      type: "flat",
      skills: [
        { name: "linux", icon: <FaLinux  /> },
        { name: "Langchain", icon: <SiLangchain  /> },
        { name: "UI/UX Design", icon: <DiResponsive /> },
        { name: "Git & Github ", icon: <FaGithub  /> }, 
        { name: "Debugging", icon: <VscDebugAll /> },
        { name: "Firebase", icon: <IoLogoFirebase /> },
        { name: "Figma", icon: <FaFigma  /> },
        { name: "Vercel", icon: <RiVercelLine /> },

      ],
    },

  ];

  // optional stars (kept from your code)
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const s = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setStars(s);
  }, []);

  return (
    <div className="w-full text-slate-300 font-light flex flex-col items-center overflow-hidden relative py-4">
      <div className="max-w-4xl w-full relative z-10">
        
        <div className="flex flex-col gap-10">

          {/* Category List */}
          <div className="flex">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(i)} // safer than cat.id
                className={`flex items-center gap-4 w-full text-left transition-all duration-500 group ${
                  activeCategory === i
                    ? "translate-x-2"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                <div
                  className={`w-[2px] h-8 transition-colors duration-500 ${
                    activeCategory === i ? "bg-white" : "bg-white/10"
                  }`}
                />
                <span
                  className={`text-sm md:text-xl tracking-wide ${
                    activeCategory === i ? "text-white" : ""
                  }`}
                >
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          {/* Skills Box */}
          <div className="min-h-[300px] relative">
            <div className="absolute inset-0 border border-purple-200/[0.2] rounded-lg" />

            <div className="relative p-5 md:p-10">
              <div className="flex flex-col gap-8">

                {(() => {
                  const currentCategory = categories[activeCategory];

                  // GROUPED (Web Dev)
                  if (currentCategory.type === "grouped") {
                    return currentCategory.groups.map((group) => (
                      <div className="mb-12" key={group.title}>

                        <h3 className="text-lg uppercase tracking-widest text-slate-400 mb-4">
                          {group.title}
                        </h3>

                        <div className="flex flex-wrap gap-x-12 gap-y-6 ">
                          {group.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className="flex items-center gap-3 group"
                            >
                              <div className="text-xl text-slate-400 group-hover:text-white">
                                {skill.icon}
                              </div>

                              {/* <div className="w-1.5 h-1.5 border border-white/20 rounded-full group-hover:bg-white" /> */}

                              <span className="text-sm tracking-widest text-slate-400 group-hover:text-white">
                                {skill.name}
                              </span>
                            </div>
                          ))}
                        </div>

                      </div>
                    ));
                  }

                  // FLAT
                  return currentCategory.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 group"
                    >
                      <div className="text-2xl text-slate-400 group-hover:text-white ">
                        {skill.icon}
                      </div>

                      {/* <div className="w-1.5 h-1.5 border border-white/20 rounded-full group-hover:bg-w */}

                      <span className="text-sm tracking-widest text-slate-400 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ));
                })()}

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default function App() {
  return <SkillsSection />;
}