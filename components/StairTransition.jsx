"use client";

import { AnimatePresence,easeInOut,motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

export default function StairTransition() {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <div className="h-screen w-screen fixed left-0 top-0 right-0 z-45 pointer-events-none">
          <Stairs />
        </div>
      {/* <motion.div className="h-screen w-screen fixed top-0" initial={{
        opacity:1
      }} animate={{
        opacity:0,
        transition:{delay:1,duration:0.4,ease:easeInOut}
      }}>

      </motion.div> */}
      </div>
    </AnimatePresence>
  );
}
