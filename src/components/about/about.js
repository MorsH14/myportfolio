import './about.css'


const About = () => {
    return (
        <div className="aboutContainer"id='about'>
            <h1>About Me</h1>
            <div className='aboutContent' >
                <p>I specialize in crafting visually appealing and responsive interfaces using HTML, CSS, and JavaScript. My skills include optimizing web performance, staying updated on industry trends, and integrating frontend components with backend logic for efficient data flow. I am dedicated to creating intuitive and accessible digital experiences that align with both user expectations and business goals.</p>
            </div>

            <div className='webContainer'>
                <div className='webDev'>
                    <h2>HTML</h2>
                </div>
                <div className='webDev'>
                    <h2>CSS</h2>
                </div>
                <div className='webDev'>
                    <h2>JavaScript</h2>
                </div>
                <div className='webDev'>
                    <h2>React</h2>
                </div>
            </div>
        </div>
    )
}


export default About