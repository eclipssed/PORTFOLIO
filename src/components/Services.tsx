"use client";

import { serviceData } from "@/assets/assets";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg font-ovo! mb-2 text-gray-700 dark:text-gray-300"
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo text-gray-900 dark:text-white"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo! text-gray-600 dark:text-gray-400"
      >
        I am full stack developer from Kohat, Pakistan with 2 years of
        experience in multiple companeis like Microsoft, Tesla and Apple.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg px-8 py-12 cursor-pointer 
          bg-card dark:bg-darkCard transition-transform duration-500 transform hover:-translate-y-1 
          hover:bg-lightHover dark:hover:bg-darkHover 
          hover:shadow-lightCardShadow dark:hover:shadow-darkCardShadow"
          >
            <Image src={icon} alt="icon" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-gray-200">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-5">
              {description}
            </p>
            <Link
              href={link}
              className="flex items-center gap-2 text-sm mt-5 text-blue-500 dark:text-blue-400 hover:underline"
            >
              Read more <ArrowRight className="w-4" />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
