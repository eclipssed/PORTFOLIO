"use client";

import { infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg font-ovo! mb-2"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64  sm:w-80  rounded-3xl max-w-none"
        >
          <Image
            // src={assets.user_image}
            width={4000}
            height={4000}
            src={"/prof-img.png"}
            alt="user image"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-ovo!">
            I am an experienced full stack developer with over a decade of
            professional experitse in this field.Throughout my career I have had
            the privilige of collaborating with prestigious oranistaions,
            contirbuting to their success and growth.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon: Icon, title, description }) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={title}
                className="
          border-[0.5px] border-gray-400 dark:border-gray-600
          rounded-xl p-6 cursor-pointer
          transition duration-500 transform
          bg-card hover:shadow-lightCardShadow dark:hover:shadow-darkCardShadow
          hover:bg-lightHover dark:hover:bg-darkHover
          hover:-translate-y-1
          
        "
              >
                <Icon className="w-7 mt-3 text-primary" />
                <div>
                  <h3 className="font-semibold my-4 text-gray-700 dark:text-gray-200">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
          {/* tools */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6  font-ovo!"
          >
            Tools I use
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
