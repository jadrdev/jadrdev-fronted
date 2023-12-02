import React from "react";
import { Strings } from "@/constants/string";
import Image from "next/image";
import hiberus from "../../../src/img/logo.svg";
import Velocitech from "../../../src/img/logo-light-c.svg";
import keapps from "../../../src/img/keapps-logo__negative.svg";

const Experience = () => {
  return (
    <>
      <div className="container py-16 md:py-20" id="Experience">
        <h2 className="text-center font-header text-4xl font-semibold uppercase sm:text-5xl lg:text-6xl">
          {Strings.Work}
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-white sm:text-2xl lg:text-3xl">
          {Strings.WorkDescription}
        </h3>
        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-center">
                <span className="shrink-0">
                  <Image
                    src={Velocitech}
                    alt="logo-Velocitech"
                    width={250}
                    height={250}
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18  sm: justify-center">
                <div className="mt-1 flex">
                    <div className="ml-4">
                        <h4 className="text-lg leading-6 font-semibold text-white">
                        Mid-Senior Frontend Developer
                        </h4>
                        <p className="mt-2 text-base leading-6 text-white">
                        {Strings.TechnologyUsage}
                        </p>
                        <p className="mt-2 text-base leading-6 text-gray-400">
                        Flutter, React, Dart, TypeScript, Docker
                        </p>
                       
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-center sm: mb-5">
                <span className="shrink-0 ">
                  <Image
                    src={hiberus}
                    alt="logo-hiberus"
                    width={150}
                    height={150}
                  />
                </span>
                <div className="relative ml-3 hidden md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18  sm: justify-center">
                <div className="mt-1 flex">
                    <div className="ml-4">
                        <h4 className="text-lg leading-6 font-semibold text-white">
                        Mid-Senior Frontend Developer
                        </h4>
                        <p className="mt-2 text-base leading-6 text-white">
                        {Strings.TechnologyUsage}
                        </p>
                        <p className="mt-2 text-base leading-6 text-gray-400">
                        React, React Native, TypeScript, NestJS
                        </p>
                       
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-center sm: mb-5">
                <span className="shrink-0 ">
                  <Image
                    src={keapps}
                    alt="logo-keapps"
                    width={150}
                    height={150}
                  />
                </span>
                <div className="relative ml-3 hidden md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18  sm: justify-center">
                <div className="mt-1 flex">
                    <div className="ml-4">
                        <h4 className="text-lg leading-6 font-semibold text-white">
                        Mid-Junior Frontend Developer
                        </h4>
                        <p className="mt-2 text-base leading-6  text-white">
                        {Strings.TechnologyUsage}
                        </p>
                        <p className="mt-2 text-base leading-6 text-gray-400">
                        React, TypeScript, Docker, SharePoint
                        </p>
                    
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Experience;
