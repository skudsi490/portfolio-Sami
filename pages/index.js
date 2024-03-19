// next image

import Image from "next/image";

// components

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion

import { motion } from "framer-motion";

// variants

import { fadeIn } from "../variants";

import Head from 'next/head';


const Home = () => {
  return (
    <>
    <Head>
        <title>Home - Sami Kudsi Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
           Bridging Technology <br /> and {" "}
            <span className="text-accent"> Innovation </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Welcome to the nexus of innovation and expertise with Sami Kudsi, a
            certified Full Stack Developer and DevOps Engineer, enriched by a
            Master’s in IT and a foundation in Business Administration. My
            platform is a canvas, illustrating a relentless pursuit of
            technological mastery and a commitment to lifelong learning. Here, I
            showcase a suite of projects and solutions that encapsulate my
            journey—not only as a seasoned professional but also as a dedicated
            Software Engineering student poised to shape the future of
            development.

          </motion.p>
          {/* projects btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>

          <motion.div
            className="hidden xl:flex"
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>

      {/* image */}

      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg image */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translat-z-0"></div>
        {/* particles */}

        <ParticlesContainer />

        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Home;
