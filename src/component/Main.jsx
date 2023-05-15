import IMG from '../Images/FB_IMG.jpg';

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src={IMG} />
        <div className='w-full h-screen absolute top-0 bg-white/50'></div>
    </div>
  )
}

export default Main