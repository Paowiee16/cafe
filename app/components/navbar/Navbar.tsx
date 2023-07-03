import Image from "next/image";
import Link from "next/link";
import coffeIcon from "../../../public/coffeIconV3.png";
import React, { useEffect } from "react";

function Navbar() {
  return (
    <>
      <header className="p-4 fixed z-30 w-screen text-accentColor bg-primary">
        <div className="container flex text-center items-center  justify-between h-16 mx-auto navtxt ">
          <li className="flex">
            <Link
              href="/"
              className="flex items-center px-4 hover-underline-animation  "
            >
              <Image src={coffeIcon} alt="icon" width={60} height={60} />
            </Link>
          </li>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link
                href="/about"
                className="flex items-center px-4 hover-underline-animation  "
              >
                ABOUT
              </Link>
            </li>
            <li className="flex">
              <Link
                href="/blog"
                className="flex items-center px-4 hover-underline-animation  "
              >
                BLOG
              </Link>
            </li>
            <li className="flex">
              <Link
                href="/products"
                className="flex items-center px-4 hover-underline-animation  "
              >
                MENU
              </Link>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
