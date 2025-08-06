"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import resumeBadge from "../../public/badge.svg";
import educationBadge from "../../public/cap.svg";

const ResumePage = () => {
  // about data
  const about = {
    title: "About me",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae accusantium enim voluptatem praesentium",
    info: [
      { fieldName: "Name", fieldvalue: "Jillur Rahman" },
      { fieldName: "Phone", fieldvalue: "(+88) 01611780984" },
      { fieldName: "Experience", fieldvalue: "6 Month" },
      { fieldName: "Skype", fieldvalue: "jillur" },
      { fieldName: "Nationality", fieldvalue: "Bangladeshi" },
      { fieldName: "Email", fieldvalue: "jillur.cse.bd@gmail.com" },
      { fieldName: "Freelance", fieldvalue: "Available" },
    ],
  };

  // experience data

  const education = {
    icon: { educationBadge },
    title: "My Education", // corrected spelling from "Eductaion"
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur, voluptas accusamus ad in ea saepe cupiditate",
    items: [
      {
        Institution: "Learn with Sumit",
        Degree: "React Accelerator Course", // corrected spelling
        duration: "2024",
      },
      {
        Institution: "Habiganj Polytechnic Institute",
        Degree: "Diploma in Computer Technology",
        duration: "2013-2017",
      },
      {
        Institution: "Asian University of Bangladesh",
        Degree: "BSc in Computer Science and Technology",
        duration: "2021-2024",
      },
    ],
  };

  // experience data
  const experience = {
    icon: { resumeBadge },
    title: "My Experience",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem consequuntur, voluptas accusamus ad in ea saepe cupiditate",
    items: [
      {
        company: "Bulipe Tech Limited",
        position: "Front End Developer",
        duration: "June 2025 - Present",
      },
      {
        company: "Intern Wise",
        position: "Front End Developer Intern",
        duration: "January - March 2025",
      },
      {
        company: "CP Bangladesh Company Limited",
        position: "IT Officer",
        duration: "March-2019 - May-2024",
      },
      
    ],
  };

  // skills data

  const skills = {
    title: "My Skills",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, cumque ab, id aliquam natus architecto officia",
    skillList: [
      {
        icon: <FaHtml5 />,
        name: "html5",
      },
      {
        icon: <FaCss3 />,
        name: "css",
      },
      {
        icon: <FaJs />,
        name: "javascript",
      },
      {
        icon: <FaFigma />,
        name: "Figma",
      },
      {
        icon: <FaReact />,
        name: "react.js",
      },
      {
        icon: <SiNextdotjs />,
        name: "next js",
      },
      {
        icon: <FaHtml5 />,
        name: "html5",
      },
      {
        icon: <FaNodeJs />,
        name: "node.js",
      },
      {
        icon: <SiTailwindcss />,
        name: "tailwind css",
      },
    ],
  };

  return (
    <motion.div
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience" className="bg-gray-800 shadow-lg  ">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="bg-gray-800">
              Education
            </TabsTrigger>
            <TabsTrigger value="skills" className="bg-gray-800">
              Skills
            </TabsTrigger>
            <TabsTrigger value="about" className="bg-gray-800">
              About me
            </TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}

            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience?.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0  ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div>
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education?.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0  ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[75px] text-center lg:text-left">
                            {item.Degree}
                          </h3>
                          <div>
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              <p>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {
                    about.info.map((item,index)=>{
                      return (
                        <li key={index} className="flex items-center xl:justify-start gap-4">
                          <span className="text-white/60">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldvalue}</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;