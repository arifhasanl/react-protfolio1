
import './abilitis.css'
const Abilitis = () => {
    return (
        <div className='flex bg-gray-100 pt-10 pb-10 gap-10'>
            <div className='w-2/5 ml-2'>
                <h4 className='text-4xl font-semibold mb-3'>Some About my Abilities</h4>
                <p>Innovative. Creative. Results-driven. With a strong foundation in web development and a passion for problem-solving, I bring a diverse skill set to the table. I thrive in crafting engaging and responsive websites for your business. My expertise in HTML, CSS, JavaScript, and WordPress ensures a seamless user experience. Let's work together to elevate your online presence and exceed your digital goals.</p>
            </div>
            <div className='w-3/5 mr-3'>
                <div className="skill-box">
                    <span className="title">HTML</span>
                    <div className="skill-bar">
                        <span className="skill-per html">
                            <span className="tooltip">95%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">CSS</span>
                    <div className="skill-bar">
                        <span className="skill-per css">
                            <span className="tooltip">80%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">JavaScript</span>
                    <div className="skill-bar">
                        <span className="skill-per javascript">
                            <span className="tooltip">60%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">NodeJS</span>
                    <div className="skill-bar">
                        <span className="skill-per nodejs">
                            <span className="tooltip">40%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">ReactJS</span>
                    <div className="skill-bar">
                        <span className="skill-per reactjs">
                            <span className="tooltip">70%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className="title">ExpressJS</span>
                    <div className="skill-bar">
                        <span className="skill-per expressjs">
                            <span className="tooltip">75%</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abilitis;