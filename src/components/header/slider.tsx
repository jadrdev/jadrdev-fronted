import React from 'react'
import Image from "next/image";
import JarDevIMG from '../../../src/img/jadrdev-pixar.jpeg'
import { Strings } from '@/constants/string';
const slider = () => {
  return (
    <div className="relative">
      <Image className="absolute inset-0 w-full h-full object-cover object-center"
      src={JarDevIMG}
       alt="" />
      <div aria-hidden="true" className="absolute inset-0 w-full h-full bg-cyan-900 bg-opacity-30 backdrop-blur-sm"></div>
      <div className="relative container m-auto px-6 md:px-12 lg:px-6">
        <div className="mb-12 pt-40 space-y-5 md:mb-20 md:pt-56 lg:w-8/12 lg:mx-auto">
          <h1 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-5xl">
            {Strings.Name}
          </h1>
          <h4 className="text-white text-center text-2xl font-bold sm:text-2xl md:text-3xl">
            {Strings.Description}
          </h4>
        </div>

        <div className="pb-16"></div>
      </div>
    </div>
  )
}

export default slider