import ProjectItem from "./ProjectItem";

// *TODO: import IMG
import Drum from "../../public/Images/drum.jpg";
import BGM from "../../public/Images/BGM.jpg";
import TinDog from "../../public/Images/TinDog.png";
import FYH from "../../public/Images/FindYourHat.jpg";
import CA from "../../public/Images/ColmarAcademy.jpg";
import CC from "../../public/Images/CountCharacther.jpg";
import SPC from "../../public/Images/ShoppeeClone.png";
import MEME from "../../public/Images/MEME.png";
import Mondrian from "../../public/Images/mondrian.png";
import SC from "../../public/Images/ShoppingCart.png";
import PM from "../../public/Images/PizzaMenu.png";
import SB from "../../public/Images/Split-Bill.png";
import TE from "../../public/Images/Tech_Ed.png";
import Ecom from "../../public/Images/Ecom.png";
import Steps from "../../public/Images/Steps.png";
import CL from "../../public/Images/CarLand.png";
import TL from "../../public/Images/Travel-Lists.png";

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
        <ProjectItem
          img={FYH}
          title="Game-findYourHat"
          link="https://replit.com/@JaturapornGoo/Jsdasset"
          description="Made with javascript"
        />
        <ProjectItem
          img={CA}
          title="ColmarAcademy-Website"
          link="https://coma-academy.netlify.app"
          description="Made with HTML CSS pure"
        />
        <ProjectItem
          img={CC}
          title="Count-Characther"
          link="https://beamish-blancmange-f95b08.netlify.app"
          description="Made with HTML CSS JavaScript"
        />
        <ProjectItem
          img={SPC}
          title="Shoppee-Clone"
          link="work-clone-project.vercel.app"
          description="Made with React(Next.js) CSS(tailwind)"
        />
        <ProjectItem
          img={MEME}
          title="MEME-Project"
          link="https://meme-ws.vercel.app/"
          description="Made with HTML CSS JavaScript"
        />
        <ProjectItem
          img={Mondrian}
          title="Mondrian-Project"
          link="https://mondrian-project-alpha.vercel.app/"
          description="Made with HTML CSS Pure"
        />
        <ProjectItem
          img={SC}
          title="Shopping-Cart"
          link="https://shopping-cart-liart-mu.vercel.app/"
          description="Made with react"
        />
        <ProjectItem
          img={PM}
          title="Pizza-Menu-Project"
          link="https://pizza-m-enu.vercel.app/"
          description="Made with React CSS"
        />
        <ProjectItem
          img={SB}
          title="Split-Bill-Project"
          link="https://eat-n-spilt.vercel.app/"
          description="Made with React CSS"
        />
        <ProjectItem
          img={TE}
          title="Education-Web"
          link="https://freetime-project.vercel.app/"
          description="Made with HTML CSS JavaScript"
        />
        <ProjectItem
          img={Ecom}
          title="Ecom-website-Project"
          link="https://ecom-website-seven.vercel.app/"
          description="Made with HTML CSS JavaScript"
        />
        <ProjectItem
          img={Steps}
          title="Steps-Project"
          link="https://steps-react-eight.vercel.app/"
          description="Made with React CSS"
        />
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
