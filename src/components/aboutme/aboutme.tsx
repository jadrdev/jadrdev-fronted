import React from 'react'
import Image from "next/image";
import Link from "next/link";
import avatar from '../../../src/img/avatar.webp';
import { Strings } from '@/constants/string';
const AboutMe = () => {

  return (
  <>
      <div className="container">
        <div className="md:flex">
          <div className="md:shrink-0 mt-24">
            <Image
              className="object-cover object-top rounded-full "
              src={avatar}
              alt="jadrdev"
              width={200}
              height={200}
            />
          </div>
          <div className="p-8">
            <h1 className="uppercase tracking-wide text-2xl text-white font-semibold">{Strings.AboutMe}</h1>
            <p className="tracking-wide text-lg text-white font-semibold">{Strings.AboutMeDescription} </p>
            <p className="tracking-wide text-lg text-white font-semibold">{Strings.AboutMeDescription2}</p>
            <p className="tracking-wide text-lg text-white font-semibold">{Strings.AboutMeDescription3}</p>
            <p className="tracking-wide text-lg text-white font-semibold"> <i>{Strings.AboutMeDescription4}</i> </p>
            <div
              className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-2 lg:justify-start"
            >
              <div
                className="flex items-center justify-center pl-0 sm:justify-start md:pl-1"
              >
                <p className="font-body text-xl  text-white mt-0">{Strings.Talk}</p>
                <div className="hidden sm:block">
                  <i className="bx bx-chevron-right text-3xl text-yellow"></i>
                </div>
              </div>
              <div
                className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0"
              >
                <a href="https://fb.com/jadrdev">
                  <i
                    className="bx bxl-facebook-square text-2xl text-white hover:text-yellow"
                  ></i>
                </a>
                <a href="https://twitter.com/jadrdev" className="pl-4">
                  <i
                    className="bx bxl-twitter text-2xl text-white hover:text-yellow"
                  ></i>
                </a>
                <a href="https://t.me/jadrdev" className="pl-4">
                  <i
                    className="bx bxl-telegram text-2xl text-white hover:text-yellow"
                  ></i>
                </a>
                <a href="https://linkedin.com/in/jadrdev/" className="pl-4">
                  <i
                    className="bx bxl-linkedin text-2xl text-white hover:text-yellow"
                  ></i>
                </a>
                <a href="https://instagram.com/jadrdev" className="pl-4">
                  <i
                    className="bx bxl-instagram text-2xl text-white hover:text-yellow"
                  ></i>
                </a>
                <Link href="https://github.com/jadrdev" className="pl-4">
                  <i
                    className="bx bxl-github text-2xl text-white hover:text-yellow"
                  ></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default AboutMe