import AboutMe from "@/components/aboutme/aboutme";
import Footer from "@/components/footer/footer";
import { Header } from "@/components/header";
import Projects from "@/components/projects/projects";
import Experience from "@/components/works/works";


export default function Home() {
  return (
    <>
    <Header></Header>
    <main className="max-w-5xl mx-auto pt-5 pb-40">
    <AboutMe></AboutMe>
    <Projects></Projects>
    <Experience></Experience>
    </main>
    <Footer></Footer>
    </>
  )
}
