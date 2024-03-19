// testimonial data
export const testimonialData = [
  {
    image: "/Houmrani.png",
    name: "Sebastian Houmrani",
    position: "Lecturer",
    message:
    "Sami's grasp of Cyber Security and IT Strategy during my classes at Clark University Poland was impressive. He consistently demonstrated deep technical understanding and a strategic approach, making valuable contributions to discussions. His skills in these areas are undoubtedly strong.",
  },
  {
    image: "/Mohammed.png",
    name: "Dr. Mohammed Nazeh Al-Imam",
    position: "Lecturer",
    message:
    "In my Software Engineering courses at the University of Europe, Sami stood out for his quick understanding and practical application of complex concepts. His enthusiasm and creativity in technology were evident, making him a standout student in the class.",
  },
  {
    image: "/Desislava.png",
    name: "Dr. Desislava Dimitrova",
    position: "Lecturer",
    message:
    "Sami excelled in Management Basics, showing exceptional analytical and strategic thinking skills. His ability to apply theoretical concepts in practical scenarios was impressive, setting him up for success in future leadership roles.",
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation,Pagination } from "swiper";

// icons
import { FaQuoteLeft } from "react-icons/fa";

// next image
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center gap-x-8 h-full px-16 md:flex-row">
            {/* avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col items-center relative mx-auto mb-6 md:mb-0 md:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* avatar*/}
                <div className="mb-2 mx-auto ">
                  <Image src={person.image} width={100} height={100} alt="" />
                </div>
                {/* name*/}
                <div className="text-lg">{person.name}</div>
                {/* position*/}
                <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
              </div>
            </div>
            {/* quote & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] before:bg-white/20 before:absolute before:left-0 before:h-[200px] relative pl-6 md:pl-20">
              {/* Quote Icon */}
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
