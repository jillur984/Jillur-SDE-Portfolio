"use client";
import { easeIn, easeInOut, motion, reverseEasing } from "framer-motion";
import Image from "next/image";
import jillur from "../public/jillur1.png";

const Photo = () => {
  return (
    <div className="h-full w-full relative order-1 xl:order-none flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: easeIn },
        }}
        className="relative h-[298px] w-[298px] xl:h-[498px] xl:w-[498px]"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: easeInOut },
          }}
          className="h-full w-full mix-blend-lighten relative"
        >
          <Image
            src={jillur}
            priority
            quality={100}
            fill
            alt="Jillur"
            className="object-contain"
          />
        </motion.div>

        {/* Circle Overlay */}
        <motion.svg
          className="absolute inset-0"
          viewBox="0 0 506 506"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat:Infinity,
              duration: 20,
              repeatType:"reverse"
              
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
