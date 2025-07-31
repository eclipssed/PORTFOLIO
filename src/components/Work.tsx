"use client";

import { workData } from "@/assets/assets";
import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg font-ovo! mb-2 text-gray-700 dark:text-gray-300"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo text-gray-900 dark:text-white"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo! text-gray-600 dark:text-gray-400"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in full stack web development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10"
      >
        {workData.map(({ title, description, bgImage }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer group relative"
            key={index}
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="bg-card text-card-foreground w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-sm">
              <div>
                <h2 className="font-semibold">{title}</h2>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
              <div className="border rounded-full border-border w-9 aspect-square flex items-center justify-center group-hover:bg-lime-300 group-hover:text-black transition">
                <Send className="w-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border-[0.5px] border-gray-700 dark:border-gray-300 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover dark:hover:bg-darkHover duration-500"
      >
        Show more <ArrowRight className="w-4 dark:text-white" />
      </motion.a>
    </motion.div>
  );
};

export default Work;
