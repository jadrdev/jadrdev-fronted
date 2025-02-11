import React, { use, useEffect, useState } from "react";
import avatar from "../../../src/img/avatar.webp";
import Image from "next/image";
import { Strings } from "@/constants/string";
import Link from 'next/link';
const menu = () => {



  return (
    <nav className="fixed z-20 w-full navbackground">
      <div className="container m-auto px-6 md:px-12 lg:px-6">
        <div className="flex flex-wrap items-center justify-between py-6 gap-6 md:py-4 md:gap-0">
          <div className="w-full flex justify-between lg:w-auto">
            <Image
              alt="JadrDev"
              height={58}
              width={54}
              src={avatar}
              className="rounded-full"
            />
            <input
              id="menu-toggle"
              type="checkbox"
              className="relative w-10 h-10 -mr-2 lg:hidden"
            />
            <label className="menu-button-container" htmlFor="menu-toggle">
              <div className="menu-button"></div>
            </label>
            <ul className="menu lg:hidden">
              <li>
              <Link href="/" className="block md:px-3 text-white">
                  {Strings.Home}
                </Link>
              </li>
              <li>
              <Link href="about" className="block md:px-3 text-white">
                  {Strings.About}
                </Link>
              </li>
              <li>
              <Link href="blog" className="block md:px-3 text-white">
                    {Strings.Blog}
                </Link>
              </li>
              <li>
                <a className="block md:px-3 text-white" href="#">
                  {Strings.Projects}
                </a>
              </li>
              <li>
                <a className="block md:px-3 text-white" href="#">
                  {Strings.Contact}
                </a>
              </li>
            </ul>
          </div>

          <div
            hidden
            className="w-full bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-auto lg:flex"
          >
            <div className="block w-full lg:items-center lg:flex">
              <ul className="space-y-6 pb-6 tracking-wide font-medium text-gray-100 lg:pb-0 lg:pr-6 lg:items-center lg:flex lg:space-y-0">
                <li>
                <Link href="/" className="block md:px-3 text-white">
                  {Strings.Home}
                </Link>
                </li>
                <li>
                <Link href="about" className="block md:px-3 text-white">
                  {Strings.About}
                </Link>
                </li>
                <li>
                <Link href="blog" className="block md:px-3 text-white">
                    {Strings.Blog}
                </Link>
                </li>
                <li>
                  <a className="block md:px-3 text-white" href="#">
                    {Strings.Projects}
                  </a>
                </li>
                <li>
                  <a className="block md:px-3 text-white" href="#">
                    {Strings.Contact}
                  </a>
                </li>
                {/* {settings?.twitter !== null ? (
                  <li>
                    <Link
                      target="_blank"
                      href={`https://twitter.com/${settings?.twitter}`}
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"
                      aria-current="page"
                    >
                      <FaTwitter />
                    </Link>
                  </li>
                ) : (
                  ""
                )}

                {settings?.facebook !== null ? (
                  <li>
                    <Link
                      target="_blank"
                      href={`https://www.facebook.com/${settings?.facebook}`}
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded  hover:text-blue-700 dark:hover:text-blue-700 md:p-0 dark:text-white"
                    >
                      {" "}
                      <FaFacebook />
                    </Link>
                  </li>
                ) : (
                  " "
                )}

                <li>
                  <button
                    className="block py-2 pl-3 pr-4 rounded md:p-0"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? <FaSun /> : <FaRegMoon />}
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default menu;
