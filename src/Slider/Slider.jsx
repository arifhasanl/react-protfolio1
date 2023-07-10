
import img1 from '../assets/image/html-css-collage-concept-with-person_23-2150062008.avif';
import img2 from '../assets/image/arif.png'
import { useTypewriter,Cursor } from 'react-simple-typewriter';
const Slider = () => {
    const [text]= useTypewriter({
        words: ['Frontend Devloper', 'React Devloper', 'Jonior Full Stack Devloper'],
        loop: 0
      })
    return (
        <div style={{ backgroundImage: `url(${img1})` }} className="">
            <div className='grid px-5 grid-cols-2 w-full justify-center items-center h-96'>
                <div className='center'>
                    <h1 className='text-white flex mb-5 justify-center w-full font-bold text-6xl'>MD:ARIF <span className='text-orange-700'>HASAN</span></h1>
                    <h3 className='text-white font-bold text-4xl flex justify-center w-full'>Hi'I am a <span className='text-orange-500'>{text}</span><Cursor></Cursor></h3>
                </div>
                <div className='flex justify-center'>
                    <img className='h-96 py-4 w-96' src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Slider;