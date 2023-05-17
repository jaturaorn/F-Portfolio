import { useState } from "react";
import {AiOutlineMenu,AiOutlineHome,AiOutlineProject,} from "react-icons/ai";
import {GrProjects} from 'react-icons/gr';

const Sidenav = () => {
    const [Nav,SetNav] = useState(false);
    const HandleNav = () => {
        SetNav(!Nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={HandleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
        {
            Nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center item-center z-20">
                    <a onClick={HandleNav} 
                    href="#main" className="w-[75%] flex justify-center item-center round-full shadow-lg bg-gray-100
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>
                    <a onClick={HandleNav}
                    href="#work" className="w-[75%] flex justify-center item-center round-full shadow-lg bg-gray-100
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <GrProjects size={20} />
                        <span className="pl-4">Work</span>
                    </a>
                    <a onClick={HandleNav}
                    href="#projects" className="w-[75%] flex justify-center item-center round-full shadow-lg bg-gray-100
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <AiOutlineProject size={20} />
                        <span className="pl-4">Project</span>
                    </a>
                </div>
            )
            : (
                ''
            )}
              <div className="md:block hidden fixed top-[25%] z-10 ">
                <div className="flex flex-col">
                <a href="#main" className="round-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4
                cursor-pointer hover:scale-100 ease-in duration-300">
                    <AiOutlineHome size={20} />
                </a>
                <a href="#work" className="round-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4
                cursor-pointer hover:scale-100 ease-in duration-300">
                    <GrProjects size={20} />
                </a>
                <a href="#projects" className="round-full shadow-lg bg-gray-100 shadow-gray-100 m-2 p-4
                cursor-pointer hover:scale-100 ease-in duration-300">
                    <AiOutlineProject size={20} />
                </a>
            </div>
        </div>
    </div>
  );
};

export default Sidenav