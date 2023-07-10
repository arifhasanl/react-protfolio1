import Section from "../Section/Section";
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import img from '../assets/image/programming-background-with-person-working-with-codes-computer_23-2150010125.avif'
import './about.css'
const About = () => {
    const [text]= useTypewriter({
        words: ['Frontend Devloper', 'React Devloper'],
        loop: 0
      })
    return (
        <div className="mt-20 mb-10">
            {
                <Section heading={'about me'} para={'Main informations about me'}></Section>
            }
            <div className="flex gap-14">
                <div className="w-2/5 relative">
                   
                    <img className="rounded-md " src={img} alt="" />
                </div>
                <div className="w-3/5">
                    <h4 className="text-4xl mb-4 font-semibold text-gray-800">I'm Arif hasan,A <span className="text-orange-500">{text}</span><Cursor></Cursor></h4>
                    <p className="mb-3 text-gray-600">Hello! I'm <span className="text-orange-500 text-3xl">Arif Hasan</span>, a skilled and dedicated Web Developer focused on creating exceptional websites tailored to your business needs. With 6 month of prictice experience, I possess the skills and expertise to deliver an outstanding online presence for your business. I am committed to understanding your requirements and collaborating closely throughout the design process.</p>
                    <p className="text-gray-600">I believe in active listening to truly understand my client's requirements and deliver top-notch work. My dedication to building long-term relationships means that your success is my priority. Continuously expanding my knowledge and staying up-to-date with the latest technologies, I ensure that your website is built with cutting-edge solutions. Let's work together to bring your vision to life and achieve remarkable results for your business.</p>
                    <div>
                        <button className="about-btn bg-orange-500 text-white rounded-md py-2 mt-4 px-3">Contact Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;