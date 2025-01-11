"use client";
import { useState, useEffect } from "react";
import Logo from "./logo";
import { navlinks } from "@/constants";
import Link from "next/link";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const GiveAction = () => {
    router.push("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
          isScrolled ? "py-1 px-4 sm:px-5 border-b" : "py-4 px-6 sm:px-10"
        } bg-opacity-90 backdrop-blur-md`}
      >
        <div
          className={`flex items-center justify-between  transition-all duration-300 ${
            isScrolled ? "gap-2 sm:gap-3" : "gap-4 sm:gap-[44px]"
          }`}
        >
          <div
            className={`transition-all duration-300 ${
              isScrolled ? "w-24 sm:w-36" : "w-28 sm:w-40"
            }`}
          >
            <Logo />
          </div>

          <div
            className={`sm:flex hidden items-center transition-all duration-300 ${
              isScrolled ? "text-p2 gap-4" : "text-sm gap-4"
            }`}
          >
            {navlinks &&
              navlinks.map((navlink) => (
                <Link
                  key={navlink.id}
                  href={navlink.route}
                  className="transition-all duration-300 hover:text-secondary hover:border-b-[1px] hover:border-secondary"
                >
                  <p className={isScrolled ? "px-2 " : "px-3"}>
                    {navlink.title}
                  </p>
                </Link>
              ))}
          </div>

          <div
            className={`hidden lg:flex rounded-md transition-all duration-300 ${
              isScrolled
                ? "bg-blue-500 px-2 text-xs"
                : "bg-blue-500 px-5 text-base ml-4"
            } text-white hover:scale-110`}
          >
            <button onClick={GiveAction} className="p-2 rounded-md">
              Donate
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for Navbar */}
      <div className={isScrolled ? "h-[48px]" : "h-[80px]"} />
    </>
  );
};

export default Navbar;
