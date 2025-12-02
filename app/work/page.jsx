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
import Clinic from "../../public/assets/thumb1.png";
import E_Commerce from "../../public/assets/thumb2.png";
import Gym from "../../public/assets/thumb3.png";
import ATCT from "../../public/assets/thumb5.png";

const WorkPage = () => {
  const projects = [

     {
      num: "01",
      category: "Full Stack E-Commerce with Dashboard",
      title: "project 01",
      description:
        "A E commerce based project where user Product Update,Edit,Add,Orders,Role all are Maintain from Dashboard.",
      stack: [{ name: "Express" }, { name: "MongoDB" }, { name: "React" }],
      image: E_Commerce,
      live: "/",
      github:
        "https://github.com/jillur984/full-stack-e-commerce-with-dashboard",
    },
    {
      num: "02",
      category: "Ayesha Telecom Company Site",
      title: "project 02",
      description:
        "It is a overview of Ayesha Telecom Company with Manage from Dashboard",
      stack: [{ name: "Next" }, { name: "MongoDB" }],
      image: ATCT,
      live: "https://atctbd.com/",
      github:
        "",
    },
    {
      num: "03",
      category: "Clinic Management",
      title: "project 03",
      description:
        "A smart clinic management platform where patients can search for doctors based on their needs, book appointments, and view available time slots. Includes nurse availability tracking and is designed for future enhancements like automated report generation.",
      stack: [{ name: "Express" }, { name: "MongoDB" }, { name: "React" }],
      image: Clinic,
      live: "https://jillurm-clinic.vercel.app/",
      github:
        "https://github.com/jillur984/Self-Project-Clinic-Management-Project",
    },
   
    {
      num: "04",
      category: "Gym Management System",
      title: "project 02",
      description:
        "A modern and responsive Gym Management System designed to streamline member registration, track subscriptions, and manage workout plans efficiently. Developed with a full-stack architecture, the project features a completed front-end interface and a robust backend foundation, ensuring scalability for future enhancements.",
      stack: [
        { name: "Next js" },
        { name: "Typescript" },
        { name: "Tailwind CSS" },
      ],
      image: Gym,
      live: "https://gym-management-system-sde.vercel.app/",
      github: "https://github.com/jillur984/GYM-management-system-",
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
