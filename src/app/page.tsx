"use client";

import AboutMe from "@/components/aboutme/aboutme";
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header";
import Projects from "@/components/projects/projects";
import Experience from "@/components/works/works";
import { Articles } from "@/components/blog/article";
import {NextUIProvider} from "@nextui-org/react";
import ContactForm from "@/components/contact/contact";
export default function Home() {


  return (
    <>
      <NextUIProvider>
      <Header></Header>
      <main className="max-w-5xl mx-auto pt-5 pb-40">
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Experience></Experience>
        <Articles></Articles>
        <ContactForm></ContactForm>
      </main>
      <Footer></Footer>
      </NextUIProvider>
    </>
  );
}
