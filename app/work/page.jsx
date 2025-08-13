"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumb1 from "../../public/assets/thumb1.png";
import Thumb2 from "../../public/assets/thumb2.png";
import Thumb3 from "../../public/assets/thumb3.png";
import Thumb4 from "../../public/assets/thumb4.png";

const WorkPage = () => {
  const projects = [
    {
      num: "01",
      category: "Clinic Management",
      title: "project 01",
      description:
        "A smart clinic management platform where patients can search for doctors based on their needs, book appointments, and view available time slots. Includes nurse availability tracking and is designed for future enhancements like automated report generation.",
      stack: [{ name: "Express" }, { name: "MongoDB" }, { name: "React" }],
      image: Thumb1,
      live: "https://jillurm-clinic.vercel.app/",
      github:
        "https://github.com/jillur984/Self-Project-Clinic-Management-Project",
    },
    {
      num: "02",
      category: "Gym Management System",
      title: "project 02",
      description:
        "A modern and responsive Gym Management System designed to streamline member registration, track subscriptions, and manage workout plans efficiently. Developed with a full-stack architecture, the project features a completed front-end interface and a robust backend foundation, ensuring scalability for future enhancements.",
      stack: [
        { name: "Next js" },
        { name: "Typescript" },
        { name: "Tailwind CSS" },
      ],
      image: Thumb3,
      live: "https://gym-management-system-sde.vercel.app/",
      github: "https://github.com/jillur984/GYM-management-system-",
    },

    {
      num: "03",
      category: "MERN Food Delivery App",
      title: "project 03",
      description:
        "End-to-End Food Delivery Website (MERN Stack + Tailwind CSS + Stripe + WhatsApp Integration.It is complete end-to-end project, I developed a fully responsive and modern food delivery website using the MERN Stack — MongoDB, Express.js, React.js, and Node.js.The UI was crafted with Tailwind CSS for a sleek, mobile-friendly design. I integrated Stripe for secure payment processing and added real-time messaging via WhatsApp to enhance customer support and engagement.",
      stack: [
        { name: "React js" },
        { name: "Node js" },
        { name: "Tailwind CSS" },
      ],
      image: Thumb2,
      live: "",
      github: "https://github.com/jillur984/MERN-Food-Delivery-App.git",
    },
    {
      num: "04",
      category: "Realtime Chat App",
      title: "project 04",
      description:
        "A sleek and user-friendly chat application built with modern web technologies, offering instant messaging, clean UI design, and smooth conversation management. Designed with a scalable architecture to easily integrate advanced features like real-time socket communication in future updates.",
      stack: [
        { name: "React js" },
        { name: "Node js" },
        { name: "Tailwind CSS" },
      ],
      image: Thumb4,
      live: "",
      github: "https://github.com/jillur984/Realtime-chat-app",
    },
  ];

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl-h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outlines num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
            </div>
            {/* project category */}
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
              {project.category} project
            </h2>
            <p className="text-white/60">{project.description}</p>
            {/* stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li className="text-accent text-xl" key={index}>
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border */}
            <div className="border border-white/20"></div>
            {/* buttons */}
            <div className="flex items-center gap-4 py-2">
              {/* live project button */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>

                      {/* overlay image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-center"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WorkPage;
