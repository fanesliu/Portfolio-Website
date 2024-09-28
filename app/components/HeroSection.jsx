"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to via-cyan-200 bg-pink-600">
              Hello, I&rsquo;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Fanes Liu",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Software Engineer",
                1000,
                "Binus Student",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
           I am a dedicated Computer Science student with expertise in software engineering
           and experience in educational counseling, ready to contribute to innovative projects 
           and collaborate in dynamic teams to drive impactful solutions
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 hover:bg-slate-500 text-black">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from from-blue-500 via-purple-600 to-pink-600 hover:bg-slate-800 text-white mt-3">
              <a
                href="https://drive.google.com/uc?export=download&id=1ccMvLF6CNtYS-tttWnGZUXH0yBuKmJPA"
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#080808] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex justify-center items-center">
            <img
              src="/images/porto_img.png"
              alt="porto image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={430}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
