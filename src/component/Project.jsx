import ProjectItem from "./ProjectItem";

// *TODO: import IMG
import Drum from "../../public/Images/drum.jpg";
import BGM from "../../public/Images/BGM.jpg";
import TinDog from "../../public/Images/TinDog.png";

// import projectData from "../util/ProjectData";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-6">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">I project that i have make</p>
      <div className="grid sm:grid-cols-2 gap-3.5">
        {/* {projectData.map((proDa, idx) => (
          <ProjectItem proDaOBj={proDa} key={idx} />
        ))} */}
        <ProjectItem
          img={BGM}
          title="BGM-Web-Clone"
          link="https://bem-clone-project.netlify.app"
          description="Made with React CSS(Tailwind)"
        />
        <ProjectItem
          img={TinDog}
          title="Tin-Dog-Project"
          link="https://fabulous-biscochitos-86b7e2.netlify.app/"
          description="Made with HTML & CSS(Bootstrap 5)"
        />
        <ProjectItem img={BGM} title="BGM Web Clone" link="" description="" />
        <ProjectItem img={BGM} title="BGM Web Clone" link="" description="" />
        <ProjectItem img={BGM} title="BGM Web Clone" link="" description="" />
        <ProjectItem img={BGM} title="BGM Web Clone" link="" description="" />

        <ProjectItem
          img={Drum}
          title="Drum-kit-Project"
          link="https://drum-f-0c4a41.netlify.app/"
          description="Made with HTML CSS and Javascript"
        />
      </div>
    </div>
  );
};

export default Project;
