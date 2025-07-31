"use client";

import { ArrowRight, LoaderIcon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";

const Contact = () => {
  const [isSending, setIsSending] = useState<boolean>(false);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_PUBLIC_ACCESS_KEY || ""
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Success", {
        description: "Message sent Successfully",
        position: "top-center",
      });
      setIsSending(false);
      form.reset();
    } else {
      console.log("Error", data);
      toast.error("Failed", {
        description:
          data.message || "Couldn't send the message. Something went wrong.",
        position: "top-center",
      });
      setIsSending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-lg font-ovo! mb-2 text-gray-700 dark:text-gray-300"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo text-gray-900 dark:text-white"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo! text-gray-600 dark:text-gray-400"
      >
        I'd love to hear from you, if you have any questions, comments or
        feedback, please use the form below.
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="max-w-2xl mx-auto"
        onSubmit={submitForm}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md "
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            name="email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md "
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          name="message"
          className="w-full p-4 outline-none border-[0.5px]   border-gray-400 rounded-md  mb-6"
          rows={6}
          placeholder="Enter your message."
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          disabled={isSending}
          className="w-max flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 border-[0.5px] border-gray-700 dark:border-gray-300 rounded-full py-3 px-8 hover:cursor-pointer mx-auto  hover:bg-lightHover dark:hover:bg-darkHover duration-500"
          //   className="py-3 px-8 w-max  flex items-center justify-between gap-2 bg-black/80  text-white rounded-full mx-auto  hover:bg-black duration-500 cursor-pointer"
          type="submit"
        >
          {isSending ? (
            <>
              Sending... <LoaderIcon className="animate-spin" />
            </>
          ) : (
            <>
              Submit now <ArrowRight />
            </>
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
