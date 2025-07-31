"use client";

// import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { assets } from "@/assets/assets";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ArrowDownLeft, Menu } from "lucide-react";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "My Work" },
  { href: "#contact", label: "Contact me" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  });
  return (
    <>
      <nav
        className={`w-full fixed top-0 z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between
    transition-colors duration-300 ${
      isScrolled
        ? " bg-white/50 backdrop-blur-md shadow-sm  dark:bg-black/50 dark:shadow-sm"
        : ""
    }`}
      >
        <Link href={"#top"} className="">
          <h1 className="font-bold w-28 mr-14 text-3xl">Furqan</h1>
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3  ${
            isScrolled
              ? ""
              : " bg-white/50 shadow-sm dark:bg-neutral-900  dark:shadow-sm"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className="font-ovo!" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <div>
            <ModeToggle />
          </div>
          <Link
            className="font-ovo! hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
            href={"#contact"}
          >
            Contact <ArrowDownLeft className="rotate-180" />
            {/* <Image src={assets.arrow_icon} className="w-3" alt="arrow-icon" /> */}
          </Link>

          {/* ------------mobile menu ------------------ */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className=" block md:hidden" variant={"link"}>
                <Menu className="size-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="sr-only">
                  Mobile Navigation Menu
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Mobile Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <ul className="mt-10 px-10 space-y-4">
                {/* <ul className="flex flex-col gap-6 items-center justify-center  h-screen"> */}
                {navLinks.map((link) => (
                  <li key={link.href} className="">
                    <SheetClose asChild>
                      <Link className="font-ovo! text-xl" href={link.href}>
                        {link.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
