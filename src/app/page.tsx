"use client";

import AboutMe from "@/components/aboutme/aboutme";
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header";
import Projects from "@/components/projects/projects";
import Experience from "@/components/works/works";
import { Articles } from "@/components/blog/article";
import {NextUIProvider} from "@nextui-org/react";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "JadrDev - Software Mobile & Frontend Developer",
    description: "Bienvenido a JadrDev. Especialista en desarrollo móvil y frontend. Aprende más sobre mis proyectos y servicios.",
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: "https://jadrdev.com",
      siteName: "JadrDev",
      title: "JadrDev - Software Mobile & Frontend Developer",
      description: "Bienvenido a JadrDev. Especialista en desarrollo móvil y frontend.",
      images: [
        {
          url: "https://www.jadrdev.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.c4c85032.webp",
          width: 1200,
          height: 630,
          alt: "JadrDev - Software Mobile & Frontend Developer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "JadrDev - Software Mobile & Frontend Developer",
      description: "Especialista en desarrollo móvil y frontend.",
      creator: "@jadrdev",
      images: [
        {
          url: "https://www.jadrdev.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar.c4c85032.webp",
          width: 1200,
          height: 630,
          alt: "JadrDev - Software Mobile & Frontend Developer",
        },
      ],
    },
  };
};

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
      </main>
      <Footer></Footer>
      </NextUIProvider>
    </>
  );
}
