import ProjectItem from "./ProjectItem";

import projectData from "../util/ProjectData";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">I project that i have make</p>
      <div className="grid sm:grid-cols-2 gap-3.5">
        {projectData.map((proDa, idx) => (
          <ProjectItem proDaOBj={proDa} key={idx} />
        ))}
        {/* 
        <ProjectItem
          img={drum}
          title="Drum-kit-Project"
          link="https://drum-f-0c4a41.netlify.app/"
        /> */}
      </div>
    </div>
  );
};

export default Project;
