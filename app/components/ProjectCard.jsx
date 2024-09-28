import React from "react";
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/24/solid";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="relative group rounded-t-xl"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "contain", // Menggunakan contain agar gambar tampil penuh
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "16 / 9", // Menentukan rasio 16:9 sesuai dengan gambar
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 justify-center items-center">
          <Link href={gitUrl} 
          className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex justify-center items-center">
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white" />
          </Link>
          <Link href={previewUrl} 
          className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex justify-center items-center">
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
