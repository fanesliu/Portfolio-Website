"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about", // Pastikan ini sesuai dengan id section yang ingin di-scroll
  },
  {
    title: "Project",
    path: "#project",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#000000] bg-opacity-95">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* Logo */}
        <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200} // Default desktop size
            height={250}
            className="w-[70px] h-[70px] md:w-[200px] md:h-[100px]" // Responsive size
          />
        </Link>

        {/* Hamburger Icon */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          )}
        </div>

        {/* Menu for larger screens */}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* MenuOverlay for mobile screens */}
      {navbarOpen && (
        <div className="md:hidden block">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} onClick={() => setNavbarOpen(false)} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
