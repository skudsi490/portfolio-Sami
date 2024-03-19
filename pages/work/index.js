// components

import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Head from "next/head";

const Work = () => {
  return (
    <>
      <Head>
        <title>My Work - Sami Kudsi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full bg-primary/30 py-36 flex items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            {/* text */}
            <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 ">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 xl:mt-12"
              >
                {" "}
                My work <span className="text-accent">.</span>
              </motion.h2>
              <motion.p
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="mb-4 max-2-[400px] mx-auto lg:mx-0"
              >
                Embarking on my journey in software engineering, I&apos;ve
                engaged in several projects that have allowed me to apply
                theoretical knowledge in practical scenarios. These projects,
                inspired by industry-standard applications, have been pivotal in
                honing my skills in various technologies and frameworks. Below
                is a showcase of some key projects that reflect my growing
                expertise in software development.
              </motion.p>
            </div>
            {/* slider */}
            <motion.div
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full xl:max-w-[65%]"
            >
              <WorkSlider />
            </motion.div>
          </div>
        </div>
        <Bulb />
      </div>
    </>
  );
};

export default Work;
