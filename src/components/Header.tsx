"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { ArrowRight, Download } from "lucide-react";
import MotionDiv from "./MotionDiv";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <MotionDiv
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, stiffness: 100, type: "spring" }}
      >
        <Image
          // src={assets.profile_img}
          height={300}
          src={"/prof-img.png"}
          width={300}
          alt="profile-image"
          className="rounded-full w-32"
        />
      </MotionDiv>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo!"
      >
        Hi! I'm Muhammad Furqan{" "}
        <Image src={assets.hand_icon} alt="hand icon" className="w-6" />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl   sm:text-6xl lg:text-[66px] font-ovo!"
      >
        Full stack Web developer based in Pakistan
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo!"
      >
        I am full stack web developer from Kohat, Pakistan with over 2 years of
        experience in multiple projects like ecommerce, blogs and social media
        apps.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        {/* Contact Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href={"#contact"}
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-white dark:text-black dark:border-black"
        >
          Contact me <ArrowRight className="w-4" />
        </motion.a>

        {/* Resume Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href={"/furqan-cv.pdf"}
          download={true}
          className="px-10 py-3 border rounded-full border-gray-500 text-black flex items-center gap-2 dark:text-white dark:border-white"
        >
          My Resume <Download className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
