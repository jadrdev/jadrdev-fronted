import React from "react";
import { Strings } from "@/constants/string";
import Image from "next/image";
import hiberus from "../../../src/img/logo.svg";
import Velocitech from "../../../src/img/logo-light-c.svg";
import keapps from "../../../src/img/keapps-logo__negative.svg";
import sao from "../../../src/img/Logotipo-SAO-e1647363525963.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faReact, faDocker, faJs, faDartLang, faWordpress, faMicrosoft, faPhp, faGithub, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faFlutter } from "@fortawesome/free-brands-svg-icons/faFlutter";



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
                    src={sao}
                    alt="servicios-avanzados-de-opinion"
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
                        Senior Frontend Developer
                        </h4>
                        <p className="mt-2 text-base leading-6 text-white">
                        {Strings.TechnologyUsage}
                        </p>
                        <div className="mt-2 text-base leading-6 text-gray-400 flex justify-center xl:justify-start">
                        <FontAwesomeIcon icon={faAngular} size="2x" style={
                            {marginRight: "10px"}
                        }/>

                        


                        <svg xmlns="http://www.w3.org/2000/svg" style={
                          {
                            fill: "#9ca3af",
                            stroke: "#9ca3af",
                            width: "2em",
                            height: "2em",
                            marginRight: "10px"
                          }
                        } 
                        className="ionicon" 
                        viewBox="0 0 512 512">
                          <path d="M256 153.9A102.1 102.1 0 10358.1 256 102.23 102.23 0 00256 153.9z"/>
                          <circle cx="402.59" cy="116.45" r="46.52"/>
                          <path d="M459.86 163.2l-1.95-4.28-3.11 3.52a70 70 0 01-28.06 19.32l-3 1.1 1.22 2.93A181.43 181.43 0 01439 256c0 100.92-82.1 183-183 183S73 356.92 73 256 155.08 73 256 73a180.94 180.94 0 0178.43 17.7l2.87 1.3 1.25-2.92A70.19 70.19 0 01359.21 62l3.67-2.93-4.17-2.07A221.61 221.61 0 00256 32C132.49 32 32 132.49 32 256s100.49 224 224 224 224-100.49 224-224a222.19 222.19 0 00-20.14-92.8z"/>
                          </svg>
                          <FontAwesomeIcon icon={faJs} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        
                        <FontAwesomeIcon icon={faGithub} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        

                        <FontAwesomeIcon icon={faLaravel} size="2x" style={
                            {marginRight: "10px"}
                        }/>

                        <FontAwesomeIcon icon={faWordpress} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                        Middle Mobile Developer
                        </h4>
                        <p className="mt-2 text-base leading-6 text-white">
                        {Strings.TechnologyUsage}
                        </p>
                        <div className="mt-2 text-base leading-6 text-gray-400 flex justify-center xl:justify-start">
                        <FontAwesomeIcon icon={faDartLang} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        <FontAwesomeIcon icon={faFlutter} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        <FontAwesomeIcon icon={faJs} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        <FontAwesomeIcon icon={faGithub} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                         <FontAwesomeIcon icon={faWordpress} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        </div>
                       
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
                        Middle Software Developer
                        </h4>
                        <p className="mt-2 text-base leading-6 text-white">
                        {Strings.TechnologyUsage}
                        </p>
                        <div className="mt-2 text-base leading-6 text-gray-400 flex justify-center xl:justify-start">
                        <FontAwesomeIcon icon={faReact} size="2x" style={
                            {marginRight: "10px"}
                        } />
                        
                        <FontAwesomeIcon icon={faJs} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                         <FontAwesomeIcon icon={faGithub} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        <FontAwesomeIcon icon={faDocker} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        </div>

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
                        Junior Frontend Developer
                        </h4>
                        <p className="mt-2 text-base leading-6  text-white">
                        {Strings.TechnologyUsage}
                        </p>
                        <div className="mt-2 text-base leading-6 text-gray-400 flex justify-center xl:justify-start">

                        <FontAwesomeIcon icon={faReact} size="2x" style={
                            {marginRight: "10px"}
                        } />
                        <FontAwesomeIcon icon={faJs} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        <FontAwesomeIcon icon={faGithub} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        <FontAwesomeIcon icon={faDocker} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        <FontAwesomeIcon icon={faMicrosoft} size="2x" style={
                            {marginRight: "10px"}
                        }/>
                        </div>
                    
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
