import { assets } from "@/assets/assets";
import { Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="text-center mt-20">
        <Link
          href={"#top"}
          className=" flex items-center justify-center   mb-2"
        >
          <h1 className="font-bold text-3xl">Furqan Mirza</h1>
        </Link>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Mail className="w-6" /> furqanmirza369@gmail.com
        </div>
      </div>
      <footer className="mt-10   border-t border-gray-400">
        <div className="text-center wrapper sm:flex items-center justify-between  max-[10%]  py-6">
          <p>
            &copy; {new Date().getFullYear()} Furqan Mirza. All rights reserved.
          </p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <Link target="_blank" href={"https://github.com/eclipssed"}>
                <div className="bg-black p-2 text-white rounded-full">
                  <Github className="" />
                </div>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={"https://instagram.com/furqanmirzaa_"}
              >
                <div className="bg-black p-2 text-white rounded-full">
                  <Instagram />
                </div>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                href={"https://www.linkedin.com/in/muhammadfurqan-js/"}
              >
                {" "}
                <div className="bg-black p-2 text-white rounded-full">
                  <Linkedin />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
