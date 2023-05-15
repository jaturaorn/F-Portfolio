import IMG from '../Images/FB_IMG.jpg';
import Typewriter from 'react-typewriter-animate';
import "react-typewriter-animate/dist/Typewriter.css";
import {FaLinkedin,FaGithub} from 'react-icons/fa';

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src={IMG} />
        <div className='w-full h-screen absolute top-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col 
            justify-center items-center'>
                <h1>I am Jaturaporn Sutongkeaw</h1>
        <Typewriter
         dataToRotate={[
            [
                { type: "word", text: "I'm a Coder" }
            ],
            [
                { type: "word", text: "I'm a Self-Taught" }
            ],
            [
                { type: "word", text: "I'm a Front-end Developer" }
            ],
        ]}
        />
            </div>
            <FaLinkedin className='cursor-pointer' size={20} />
            <FaGithub className='cursor-pointer' size={20}/>
        </div>
    </div>
  )
}

export default Main