import React from 'react'
import Image from "next/image";
import ReactLogo from '../../../src/img/logo-react.webp'
import FlutterLogo from '../../../src/img/flutter-logo.png'
import NodeLogo from '../../../src/img/logo-node.webp'
import CSSLogo from '../../../src/img/logo-css3.webp'
import WPLogo from '../../../src/img/logo-wordpress.webp'
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

        <div className="pb-16">
          {/* <div className="md:px-12">
            <span className="block text-center font-medium text-white">{Strings.TechnologyPrefer}</span>

            <div className="mt-8 -mx-6 px-6 overflow-x-auto md:overflow-x-hidden">
              <div className="w-max flex justify-center flex-wrap items-center gap-4 md:w-auto md:gap-6 lg:gap-8">
                <div className="flex items-center">
                  <Image
                    alt="React"
                    height={60}
                    width={60}
                    src={ReactLogo}
                    className="rounded-full"
                  />
                </div>
                <div className="flex items-center">
                  <Image
                    alt="Flutter"
                    height={60}
                    width={60}
                    src={FlutterLogo}
                    className="rounded-full"
                  />
                </div>
                <div className="flex items-center">
                  <Image
                    alt="NodeJs"
                    height={60}
                    width={60}
                    src={NodeLogo}
                    className="rounded-full"
                  />
                </div>
                <div className="flex items-center">
                  <Image
                    alt="NodeJs"
                    height={60}
                    width={60}
                    src={WPLogo}
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default slider