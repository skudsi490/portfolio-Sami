import React, { useState } from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiAmazonaws,
  SiTypescript,
  SiAzuredevops,
  SiMysql,
  SiPowershell,
  SiLinux,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          FaHtml5,
          FaCss3,
          FaJs,
          SiTypescript,
          FaReact,
          SiNextdotjs,
          FaPython,
        ],
      },
      {
        title: "DEVOPS",
        icons: [
          SiDocker,
          SiKubernetes,
          SiAmazonaws,
          SiAzuredevops,
          SiMysql,
          SiPowershell,
          SiLinux,
        ],
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "IT Administrator - Plus500™",
        stage: "Nov 2020 - Mar 2023",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title:
          "Software Engineering (B.Sc.) - University of Europe for Applied Sciences",
        stage: "Expected Completion: 2026",
      },
    ],
  },
  {
    title: "Certifications",
    info: [
      {
        title: "Full Stack Development - TESI- The External Studies Institute",
        stage: "2024",
      },
      {
        title: "DevOps Engineering - TESI- The External Studies Institute",
        stage: "2024",
      },
    ],
  },
];

// components

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter

import CountUp from "react-countup";

import Head from "next/head";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[290px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Tech Innovator: From Classroom to Code
          </motion.h2>
          <motion.h3
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h3"
          >
            Crafting <span className="text-accent">Cutting-Edge </span>{" "}
            Solutions
          </motion.h3>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-10 relative"
          >
            My journey into technology is just starting, supported by my current
            studies in Software Engineering. As I develop skills in Full Stack
            Development and DevOps, I&apos;m eager to apply what I&apos;ve
            learned and grow in a professional environment. I&apos;m looking for
            my a role where I can contribute, learn from experienced
            colleagues, and be part of impactful projects. I&apos;m excited to
            bring my passion for technology to a team that values growth and
            innovation.
          </motion.p>
          {/* counters */}

          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experince */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={500} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {" "}
                  Hours of Coding Practice{" "}
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {" "}
                  Educational Degrees{" "}
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {" "}
                  Technical Certifications{" "}
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  {" "}
                  Projects Completed{" "}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {" "}
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-4 xl:py-8 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <>
                  <Head>
                    <title>About - Sami Kudsi</title>
                    <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    {/* title */}
                    <div className="font-light mb-2 md:mb-0">
                      {" "}
                      {item.title}{" "}
                    </div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>

                    <div className="flex gap-x-4 ">
                      {/* icons */}
                      {item.icons?.map((IconComponent, iconIndex) => {
                        return (
                          <div key={iconIndex} className="text-2xl text-white ">
                            {<IconComponent />}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
