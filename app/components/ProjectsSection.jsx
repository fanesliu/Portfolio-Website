import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Fanes Liu's Portfolio Website",
    description: "This portfolio website highlights my web development and software engineering projects, built using React.js and Next.js for optimal performance and responsive design. The site features a dynamic project gallery with hover effects, integrated links to source code and live demos, and optimized images that maintain proper aspect ratio. With interactive icons designed using Heroicons and Flexbox, the website provides a seamless, user-friendly experience across all devices.",
    image: "/images/project/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fanesliu/Portfolio-Website.git",
    previewUrl: "https://fanes-portfolio-website.vercel.app/",
  },
  {
    id: 2,
    title: "Restaurant Management System",
    description: "Restaurant Management System (Java) A restaurant management system built with Java and MySQL, designed to handle employee data, menu management, customer reservations, and restaurant details. The project is modular, with packages for managing the database, employees, menu, reservations, and user interface. Key features include user authentication, menu categories, table reservation options, and support for multiple restaurant branches.",
    image: "/images/project/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cindyytanoto/OOP_FinalProject.git",
    previewUrl: "https://github.com/cindyytanoto/OOP_FinalProject.git",
  },
  {
    id: 3,
    title: "Jokeys converence center",
    description: "The JCC website build using HTML, CSS, Java-Scrip is like a digital brochure for the conference center, presenting details about its services, upcoming events, prices, and background information in an easy-to-navigate format. It's designed to look good and work well on computers and phones, and it ensures that when people fill out forms to get in touch, they're doing it correctly.",
    image: "/images/project/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/fanesliu/Jokeys-Conference-Center.git",
    previewUrl: "https://www.figma.com/proto/81irEjgh5BRwXsVzEvxxFo/Figma-Jokey's-Conference-Center?node-id=59-110&starting-point-node-id=1%3A2&t=GYprZqQzXo9m4m5Z-1",
  },
  {
    id: 4,
    title: "Pooch Gourmet Dog Nutrition",
    description: "Pooch Gourmet is a website dedicated to dog nutrition. Owners can enter their dog's age to receive tailored health and nutrition advice. The site features a calorie calculator to determine the appropriate caloric intake for each dog. Additionally, PostGarment sells dog food that supports their nutritional needs. The site also includes a detailed dog profile feature and an About Us section explaining our mission and team.",
    image: "/images/project/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/proto/4dtMGvV4tw1oHaaanM5RZL/PoochGourmet?node-id=59-533&node-type=canvas&t=S9wfXHFvjoszn2NC-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=59%3A533",
    previewUrl: "https://www.figma.com/proto/4dtMGvV4tw1oHaaanM5RZL/PoochGourmet?node-id=59-533&node-type=canvas&t=S9wfXHFvjoszn2NC-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=59%3A533",
  },
  {
    id: 5,
    title: "MSD HPV Vaccination Web",
    description: "This website was created as part of the TF-SCALE program with MSD, undertaken by our group to raise awareness and accessibility of the HPV vaccine among women in Singapore. The site offers information on the importance of the HPV vaccine, affordable pricing, and incentives such as grocery vouchers to encourage more women to get vaccinated. Additionally, the site provides user testimonials and a FAQ section to address common questions about the HPV vaccine.",
    image: "/images/project/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/proto/jX0iegMvKEAuNlO0vel85U?node-id=0-1&t=gSKh1SNjO8CSb4Sg-6",
    previewUrl: "https://www.figma.com/proto/jX0iegMvKEAuNlO0vel85U?node-id=0-1&t=gSKh1SNjO8CSb4Sg-6",
  },
  {
    id: 6,
    title: "safe path app",
    description: "SAFE PATH APP with AI  using YOLO 4  is a apps dedicated to visually impaired individuals and their guardians. The app is powered by Artificial Intelligence to help people with imperfect vision to navigate and detect obstacles. They will be notified through the smart eyeglasses that has been connected to theguardians cellphone. Guardian can monitor their location and monitor by leveraging the camera that is embedded into the eyeglasses.",
    image: "/images/project/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const ProjectsSection = () => {
  return (
    <section id="project">
        <br />
        <br />
        <br />
        <br />
      <h2 className="text-center text-4xl font-bold text-white mt-4">My Projects</h2>
      <br />
      <br />
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
