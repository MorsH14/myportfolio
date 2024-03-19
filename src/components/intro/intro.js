import './intro.css'


const Intro = ()=>{
    return(
        <div className="introContainer" id='home'>
            <div className='introRight'>
            <h1>Hello,</h1>
            <h2>My name is <span>Alade Olamide.</span> </h2>
            <h3>A Frontend Developer</h3>

            <p>I am a skilled Frontend Developer with great years of experience <br/> using Html, CSS, Javascript and React JS to make a responsive website. <br/>I am from ilorin, Nigeria and i am actively available for jobs.</p>

            <a href='https://Wa.me//+2349038662876'>
                <button>Hire me</button>
                </a>
            </div>

            <div className='imgIntro'>
                <img src={'./assets/pc.png'} size={400} alt='MorsH' className='profileImg' />
            </div>
            
        </div>
    )
}



export default Intro