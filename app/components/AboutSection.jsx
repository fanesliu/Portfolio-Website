"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

const TAB_DATA = [
  {
    title: "skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Python</li>
        <li>ASP.Net</li>
        <li>C++</li>
        <li>JavaScrip</li>
        <li>React</li>
        <li>Laravel PHP</li>
      </ul>
    ),
  },
  {
    title: "education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Binus University, Jakarta</li>
        <li>Computer Science</li>
        <li>Current GPA: 3.74</li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
        <ul className="list-disc pl-2">
            <li>Hackathon x Microsoft AI for Accessibility Favorite Winner • Microsoft • 2024</li>
            <li>Mentor • BINUS University • September 2024 - Present</li>
            <li>TF-SCALE • Temasek Foundation • March 2024 - October 2024</li>
            <li>Education Counselor • BINUS University • May 2022 - August 2023</li>
        </ul>
    )
  },
  {
    title: "certification",
    id: "certification",
    content: (
        <ul className="list-disc pl-2">
            <li>Hackathon x Microsoft AI for Accessibility Favorite Winner • Microsoft • 2024</li>
            <li>Mentor • BINUS University • September 2024 until Present</li>
            <li>Education Counselor • BINUS University • May 2022 until August 2023</li>
        </ul>
    )
  }
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <br />
      <br />
      <div className="flex flex-col md:flex-row items-center py-8 px-4 xl:gap-16 sm:py-16">
        {/* Gambar berada di sebelah kiri */}
        <Image src="/images/About.png" width={450} height={450} />

        {/* Teks berada di sebelah kanan gambar */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        {/* <div className="md:ml-8 mt-8 md:mt-0"> */}
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a 5th-semester Computer Science student at Binus University,
            specializing in Software Engineering. With a solid foundation in
            programming languages such as HTML, CSS, ReactJS, JavaScript, Java,
            Python, ASP.Net, C++, and NextJS, I have hands-on experience
            developing sophisticated web and application solutions. I enjoy
            integrating front-end designs with back-end functionality to create
            robust, scalable, and efficient software.
            <br />
            <br />
            My journey in technology has allowed me to participate in various
            impactful projects, including winning the Favorite Winner award at
            the Hackathon x Microsoft AI for Accessibility 2024. I am passionate
            about using AI and software to solve real-world challenges and
            improve people lives. As a Mentor at Binus University, I assist
            students in navigating their academic journey, sharing my knowledge
            and fostering growth in others.
            <br />
            <br />I am always excited about new opportunities to apply my skills
            and collaborate in dynamic, forward-thinking environments.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certification{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
