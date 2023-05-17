import IMG from '../Images/FB_IMG.jpg';
import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";
import {FaLinkedinIn,FaGithub} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src={IMG} />
        <div className='w-full h-screen absolute top-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col 
            justify-center lg:items-start items-start'>
                <h1 className='sm:text-3.25xl text-4xl font-bold text-gray-800 text-center'>I am Jaturaporn Sutongkeaw</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                    I am_
                 <Typewriter
                     dataToRotate={[
                        [
                            { type: "word", text: "  Coder" }
                        ],
                        [
                            { type: "word", text: "  Self-Taught" }
                        ],
                        [
                            { type: "word", text: "  Front-end Developer" }
                        ],
                    ]}
                 />
                </h2>
                <div className='flex justify-between  pt-6 max-w-[100px] w-full'>
                    <FaGithub className='cursor-pointer' size={30}/>
                    <FaLinkedinIn className='cursor-pointer' size={30} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main