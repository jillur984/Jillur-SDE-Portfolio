"use client"
import {BsArrowDown, BsArrowDownLeft, BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";
 import { easeIn, motion } from "framer-motion";
const Service = () => {
  const services=[
    {
      num:'01',
      title:"Front end Development",
      description:"I work as a Frontend Developer using React, Next.js, JavaScript, and Tailwind CSS to build modern, responsive website.",
      href:""
    },
     {
      num:'02',
      title:"Backend Development",
      description:"I specialize in MERN stack backend development using Node.js and Express.js to build scalable APIs.I work with MongoDB and PostgreSQL for efficient data storage and management.I focus on creating secure, high-performance server-side logic for full-stack web applications.",
      href:""
    },
     {
      num:'03',
      title:"Custom Development",
      description:"I convert Figma and other design files into fully responsive, pixel-perfect web interfaces.Using React, Next.js, and Tailwind CSS, I ensure smooth and accurate design implementation.I focus on delivering clean, maintainable code that brings UI/UX designs to life.",
      href:""
    },

   
  ]
 
  return (
    <section className="min-h-[80vh]flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
     <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-[60px]" initial={{opacity:0}} animate={{opacity:1,transition:{delay:0.4,duration:0.4,ease:easeIn}}}>
      {
        services.map((service,index)=>{
          return (
            <div key={index} className="mx-auto pl-4 md:pl-2">
             <div className="flex justify-between items-center">
               <div className="text-5xl text-outline text-transparent hover:text-outline-hover transition-all duration-500">{service.num}</div>
              <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
              <BsArrowDownRight className="text-primary text-3xl"/>
              </Link>
             </div>
            <h2 className="text-[42px] font-bold  text-white hover:text-accent transition-all duration-500 ">{service.title}</h2>
            <p className="text-white/80 text-[20px]">{service.description}</p>
            </div>
          )
        })
      }
     </motion.div>
      </div>
    </section>
  )
};

export default Service;