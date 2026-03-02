"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.offsetHeight);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading mb-16">My Work Experience</h2>

      <div ref={contentRef} className="relative pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex pt-16 md:pt-28">
            {/* LEFT COLUMN (Fixed width) */}
            <div className="relative hidden md:block w-72 shrink-0">
              {/* Dot aligned with line */}
              <div className="absolute left-[27px] top-8 w-4 h-4 rounded-full bg-indigo-500 z-10" />

              <div className="sticky top-40 pl-16 text-neutral-300">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={item.companyLogo}
                    alt={item.company}
                    className="w-12 h-12 object-contain rounded-md"
                  />
                  <h3 className="text-lg font-medium">{item.company}</h3>
                </div>

                <p className="text-neutral-200 text-xl font-medium pt-3">
                  {item.date}
                </p>
                <p className="text-lg text-neutral-300">{item.title}</p>
                <p className="text-sm text-neutral-400">{item.job}</p>
              </div>
            </div>

            {/* RIGHT COLUMN (Flexible width) */}
            <div className="flex-1 pl-8 md:pl-12">
              {/* Mobile Header */}
              <div className="relative md:hidden mb-4 text-neutral-300">
                <div className="md:hidden absolute left-[-31px] top-5 w-4 h-4 rounded-full bg-indigo-500 z-10" />
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={item.companyLogo}
                    alt={item.company}
                    className="w-12 h-12 object-contain rounded-md"
                  />
                  <h3 className="text-md font-bold">{item.company}</h3>
                </div>

                <p className="text-lg pt-1 font-bold">{item.date}</p>
                <p className="text-neutral-300 font-medium">{item.title}</p>
                <p className="text-neutral-400">{item.job}</p>
              </div>

              {item.contents.map((content, idx) => (
                <p key={idx} className="mb-3 text-neutral-400 leading-relaxed">
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Vertical Line Positioned Properly */}
        <div
          style={{ height }}
          className="
           absolute top-0 w-[2px] bg-neutral-700
           left-2
           md:left-[34px]
  "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute top-0 w-[2px] bg-indigo-500"
          />
        </div>
      </div>
    </section>
  );
};
