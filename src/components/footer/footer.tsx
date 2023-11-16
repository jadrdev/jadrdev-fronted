import React, { Component } from "react";
import Link from 'next/link';
import { Strings } from "@/constants/string";
const Footer = () => {
    return (
      <>
        <div className="bg-black">
          <div className="bg-black container mx-auto px-6 pt-10 pb-6" >
            <div className="container pt-9">
              <div className="flex justify-center mb-9">
                <Link href="#" className="mr-9 text-white">{Strings.AvisoLegal}</Link>
                <Link href="#" className="mr-9 text-white">{Strings.PrivacyPolicy}</Link>
                <Link href="#" className="mr-9 text-white">{Strings.Cookies}</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
}

export default Footer;