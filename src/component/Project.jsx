import ProjectItem from "./ProjectItem";
import bem from "../Images/Capture.jpg";
import tin from "../Images/Capture1.png";
import coma from "../Images/Capture2.jpg";
import game from "../Images/Capture1.jpg";
import count from "../Images/Capture3.jpg";
import drum from "../Images/Capture4.jpg";

const Project = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">I project that i have make</p>
      <div className="grid sm:grid-cols-2 gap-6">
        <ProjectItem
          img={bem}
          title="BEM Clone Project"
          link="https://bem-clone-project.netlify.app"
        />
        <ProjectItem
          img={tin}
          title="Tindog-Project"
          link="https://fabulous-biscochitos-86b7e2.netlify.app"
        />
        <ProjectItem
          img={coma}
          title="Colma-academy-project"
          link="https://coma-academy.netlify.app/"
        />
        <ProjectItem
          img={game}
          title="Game-findyourhat-Js"
          link="https://replit.com/@JaturapornGoo/Jsdasset"
        />
        <ProjectItem
          img={count}
          title="Count-project"
          link="https://beamish-blancmange-f95b08.netlify.app/"
        />
        <ProjectItem
          img={drum}
          title="Drum-kit-Project"
          link="https://drum-f-0c4a41.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Project;
