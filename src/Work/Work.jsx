import Section from "../Section/Section";
import img1 from '../assets/image/Screenshot_10.png'
import img2 from '../assets/image/Screenshot_2.png'
import img3 from '../assets/image/Screenshot_1.png'
import img4 from '../assets/image/Screenshot_3.png'

const Work = () => {
    return (
        <div className="mt-10 mb-10">
            {
                <Section heading={'top works'}para={'Check out my latest works'}></Section>
            }
            <div className="grid gap-8 grid-cols-2">
                <div className="">
                    <img src={img1} alt="" />
                    <div className="flex  mt-5">
                        <a className="text-green-800 underline mr-5" href=" https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-arifhasanl">GitHub</a>
                        <a className="text-green-800 underline" href="https://music-school-851bb.web.app/">Live Link</a>
                    </div>
                </div>
                <div className="">
                    <img src={img2} alt="" />
                    <div className="flex  mt-5">
                        <a className="text-green-800 underline mr-5" href=" https://github.com/programming-hero-web-course1/b712-summer-camp-client-side-arifhasanl">GitHub</a>
                        <a className="text-green-800 underline" href="https://cat-shop-cc51e.web.app/?fbclid=IwAR0pGwk7UkJZ-uLHfVH7XGsqpntrh5reWjmVAC-7dvKyFiAhYloP4TJMOf8">Live Link</a>
                    </div>
                </div>
                <div className="">
                    <img src={img3} alt="" />
                    <div className="flex  mt-5">
                        <a className="text-green-800 underline mr-5" href=" https://github.com/programming-hero-web-course-4/b7a10-chef-recipe-hunter-client-side-arifhasanl">GitHub</a>
                        <a className="text-green-800 underline" href="https://ranna-discover.web.app/ranna">Live Link</a>
                    </div>
                </div>
                <div className="">
                    <img src={img4} alt="" />
                    <div className="flex  mt-5">
                        <a className="text-green-800 underline mr-5" href="">GitHub</a>
                        <a className="text-green-800 underline" href="">Live Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;