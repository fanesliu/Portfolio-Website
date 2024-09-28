import Image from "next/image";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { AboutSection } from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectCard from "./components/ProjectCard";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#030303]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
       <HeroSection />
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <AboutSection/>
       <ProjectsSection/>
      </div>
    </main>
  );
}
