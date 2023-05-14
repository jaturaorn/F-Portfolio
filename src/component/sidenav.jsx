import { useState } from "react";
import {AiOutlineMenu,AiOutlineHome} from "react-icons/ai";

const Sidenav = () => {
    const [Nav,SetNamv] = useState(false);
    const HandleNav = () => {
        SetNamv(!Nav);
    };

  return (
    <div>
        <AiOutlineMenu onClick={HandleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
        {
            Nav ? (
                <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center item-center z-20">
                    <a href="#main" className="w-[75%] flex justify-center item-center round-full shadow-lg bg-gray-100
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Home</span>
                    </a>
                    <a href="#main" className="w-[75%] flex justify-center item-center round-full shadow-lg bg-gray-100
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Work</span>
                    </a>
                    <a href="#main" className="w-[75%] flex justify-center item-center round-full shadow-lg bg-gray-100
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Project</span>
                    </a>
                    <a href="#main" className="w-[75%] flex justify-center item-center round-full shadow-lg bg-gray-100
                        shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 ">
                        <AiOutlineHome size={20} />
                        <span className="pl-4">Resume</span>
                    </a>
                </div>
            )
            : (
                <div></div>
            )
        }
    </div>
  )
}

export default Sidenav