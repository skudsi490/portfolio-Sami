// import swiper react components

import { Swiper, SwiperSlide } from "swiper/react";
import { RiArrowRightSLine as RxArrowTopRight } from "react-icons/ri";

//import swiper styles

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  FaReact, // For React (Front-End Development)
  FaNodeJs, // For Node.js (Back-End Development)
  FaDocker, // For Docker (DevOps Engineering)
  FaDatabase, // For Database (Full Stack Development)
  FaAws, // For AWS (Cloud Services)
  FaGitAlt, // For Git (Version Control and Collaboration)
  FaLightbulb, // For Innovation (Problem-Solving and Innovation)
  FaProjectDiagram,
} from "react-icons/fa";

// data
const serviceData = [
  {
    icon: <FaReact />,
    title: "Front-End Development",
    description:
      "Experienced in crafting engaging user interfaces using React and Next.js. Proficient in implementing responsive design with Tailwind CSS, ensuring seamless user experiences across devices.",
  },
  {
    icon: <FaNodeJs />,
    title: "Back-End Development",
    description:
      "Skilled in developing robust back-end solutions with Node.js. Experienced in database management and integration using MongoDB and Prisma, ensuring data integrity and efficiency.",
  },
  {
    icon: <FaDocker />,
    title: "DevOps Engineering",
    description:
      "Trained in DevOps practices, specializing in automation, continuous integration, and deployment. Familiar with tools like Docker, Jenkins, and Kubernetes for efficient deployment and scaling.",
  },
  {
    icon: <FaDatabase />,
    title: "Full Stack Development",
    description:
      "Competent in full-stack project development, integrating front-end and back-end technologies to deliver comprehensive solutions. Emphasizes a balanced approach to both client-side and server-side development.",
  },
  {
    icon: <FaAws />,
    title: "Cloud Services",
    description:
      "Knowledgeable in utilizing cloud platforms such as AWS for scalable and secure application deployment. Understands cloud architecture and service integration for optimal performance.",
  },
  {
    icon: <FaGitAlt />,
    title: "Version Control and Collaboration",
    description:
      "Proficient in using Git for version control, ensuring effective collaboration and code management in team environments.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem-Solving and Innovation",
    description:
      "Strong problem-solving skills with a focus on innovative solutions. Committed to continuous learning and adapting to emerging technologies.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Project Management",
    description:
      "Understanding of Agile and Scrum methodologies, ensuring efficient project management and teamwork in fast-paced development settings.",
  },
];

// import required modules

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(65,47,123,0.15)] rounded-lg px-4 py-6 flex sm:flex-col items-start justify-between gap-x-4 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300"
              style={{ height: "340px" }}
            >
              {/* icon */}
              <div className="text-3xl text-accent mb-4">{item.icon}</div>
              {/* title & description */}
              <div className="">
                <div className="mb-2 text-md font-semibold">{item.title}</div>
                <p
                  className="text-sm leading-normal"
                  style={{ maxHeight: "190px", overflow: "hidden" }}
                >
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl self-end">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
