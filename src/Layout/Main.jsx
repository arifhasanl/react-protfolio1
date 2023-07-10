
import Abilitis from '../Abilits/Abilitis';
import About from '../About/About';
import Contact from '../Contect/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';
import Work from '../Work/Work';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {
                <Navbar></Navbar>
                
            }
            {
                <Slider></Slider>
            }
            {
                <About></About>
            }
            {
                <Abilitis></Abilitis>
            }
            {
                <Work></Work>
            }
            {
                <Contact></Contact>
            }
            {
                <Footer></Footer>
            }
        </div>
    );
};

export default Main;