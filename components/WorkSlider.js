// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "MERN STACK BOOKING APP",
          path: "/booking-app.png",
          url: "https://mern-booking-webapp-235704ace9e5.herokuapp.com/",
        },
        {
          title: "Complete DevOps Project",
          path: "/CICD.png",
          url: "https://github.com/skudsi490/ecommerce-django-react",
        },
        {
          title: "WonderX Online Courses React NextJS Typescript",
          path: "/wonderx.png",
          url: "https://wonderx-app.vercel.app/",
        },
        {
          title: "Ecommerce Nuxt 3 Vue js Tailwind CSS Supabase Prisma",
          path: "/ecommerce.png",
          url: "https://ecommerce-vue-omega.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Chat App",
          path: "/chatApp.png",
          url: "https://github.com/skudsi490/chatApp",
        },
        {
          title: "VUE3 Expenses Tracker",
          path: "/Expense-tracker.png",
          url: "https://expenses-tracker-vue3.vercel.app/",
        },
        {
          title: "Adidas Store ReactJS",
          path: "/addias.png",
          url: "https://adidas-store-react.vercel.app/",
        },
        {
          title: "Flutter Weather App (Mobile)",
          path: "/WeatherApp.png",
          url: "https://github.com/skudsi490/Mobile-Weather-App",
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

import Link from "next/link";

const WorkSlider = () => {
  // Function to handle opening URL in a new tab
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden"
                onClick={() => openInNewTab(image.url)}
              >
                {/* Grouped elements for hover effect */}
                <div className="group">
                  <Image
                    src={image.path}
                    width={500}
                    height={300}
                    alt={image.title}
                    className="z-0"
                    layout="responsive"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                  {/* Title and Live Project Text */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white text-lg">{image.title}</div>
                    </div>

                    {/* Live Project text */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="text-white">LIVE</div>
                      <div className="text-white">PROJECT</div>
                      <BsArrowRight className="text-xl" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
