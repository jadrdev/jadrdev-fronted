import Image from "next/image";
import React from "react";
import fonto from "../../../src/img/fonto.webp";
import Link from 'next/link';
import { Strings } from '@/constants/string';

export default function Projects() {
  return (
    <section>
      <div className="max-w-7xl mx-auto h-28">
        <h1 className="text-4xl mb-2 md:text-4xl font-bold py-15 text-center md:text-left">
          {Strings.Project}
        </h1>
        <h4
          className="font-header text-xl font-medium py-2 sm:text-2xl text-center lg:text-3xl"
        >
          {Strings.ProjectDescription}
        </h4>
      </div>
      {/* Grid starts here */}
      <div className="dark:bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-18 pb-215 sm: p-5">
          {/* Single card */}
          <a
            href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl">
            <div className="relative overflow-hidden">
              <Image
                src={fonto}
                alt="portfolio"
                className="rounded-xl transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Tailwind Master Kit
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
          <a
            href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <Image
                src={fonto}
                alt="portfolio"
                className="rounded-xl transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Tailwind Master Kit
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
          <a
            href="https://tailwindmasterkit.com"
            className="w-full block shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <Image
                src={fonto}
                alt="portfolio"
                className="rounded-xl transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-blue-500 rounded-md px-2">
                Blog Personal
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
               JadrDev
              </h1>
            </div>
          </a>
        </div>
      </div>
      <div className="mx-auto pt-8 text-center">
        <Link href="projects">
          <button className="text-xl bg-transparent hover:bg-red-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
          Otros proyectos
          </button>
        </Link>
      </div>
    </section>
  )
}