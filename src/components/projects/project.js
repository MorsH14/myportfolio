import './project.css'



const Project = () => {
    return (
        <div className='projectMainContainer' id='project'>
            <div className='topProject' >
                <h1>Projects</h1>
                <p>Here are some of my works which i have made <br /> kindly go through it!</p>
                <p2>Thanks!!!</p2>
            </div>

            <div className='projectContainer'>
                <div className='projextText'>
                <div className='mainProject'>
                <a href="https://business-web-livid.vercel.app/"><img src='./assets/downlo.jpg' alt='project' width={250} className='mainProject'/></a>
                <h3>Business Managemet Website</h3>
                </div>
                </div>

                <div className='projextText'>
                <div className='mainProject'>
                <a href="https://morsh-hotel.vercel.app/"><img src='./assets/download.jpg' alt='project' width={250} className='mainProject'/></a>
                <h3>Hotel Managemet Website</h3>
                </div>
                </div>

                <div className='projextText'>
                <div className='mainProject'>
                <a href=""><img src='./assets/images.jpg' alt='project' width={250} className='mainProject'/></a>
                </div>
                </div>

                <div className='projextText'>
                <div className='mainProject'>
                <a href=""><img src='./assets/image.jpg' alt='project' width={250} className='mainProject'/></a> 
                </div>
                </div>
            </div>
        </div>
    )
}


export default Project