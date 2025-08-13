"use client";

import { Input } from "@/components/ui/input";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

const ContactPage = () => {
  const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "(+88) 01611780984",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      description: "jillur.cse.bd@gmail.com",
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Address",
      description: "Mymensingh, Bangladesh",
    },
  ];

  return (
    <motion.section
      className="py-6"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let’s Work Together</h3>
              <p className="text-white/60">
                Have a project in mind or an idea you want to bring to life?
                I’m always excited to collaborate and create something amazing.
                Fill out the form below and I’ll get back to you as soon as
                possible.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
              </div>
              {/* select */}
              <div className="relative z-10">
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a Service" />
                  </SelectTrigger>
                  <SelectContent
                    position="popper"
                    className="z-50 bg-[#27272c]"
                  >
                    <SelectGroup>
                      <SelectLabel>Select a Service</SelectLabel>
                      <SelectItem value="webdev">Web Development</SelectItem>
                      <SelectItem value="uiux">UI/UX Design</SelectItem>
                      <SelectItem value="logo">Logo Design</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <br />
                {/* text area */}
                <Textarea
                  className="h-[200px] w-full bg-primary"
                  placeholder="Type your message here"
                ></Textarea>
                <br />
                {/* button */}
                <Button className="max-w-40">Send a Message</Button>
              </div>
            </form>
          </div>

          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-sm xl:text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
