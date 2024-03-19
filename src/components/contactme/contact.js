import './contact.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";





const Contactme = () => {
    return (
        <div className='contactMeMainContainer' id='contact'>
            <div className=''>
                <h1>Contact Me</h1>
            </div>

            <div className='mainContact'>
                <div className='ccc'>
                    <input type='text' placeholder='NAME' name='containerName' className='contactContainer' />
                </div>
                <div className='ccc'>
                    <input type='text' placeholder='EMAIL' name='containerName' className='contactContainer' />
                </div>
                <div className='ccc'>
                    <textarea type='text' placeholder='TALK TO ME' name='containerName' className='contactContainerl' />
                </div>


                <div className='contactIcon'>

                    <a href='https://Wa.me//+2349038662876'>
                    <div>
                    <FaWhatsapp size={30} color='green'/>
                    </div>
                    </a>

                    <a href='https://www.instagram.com/__morsh?igsh=MWxrOWJsajFxajd6Yg%3D%3D&utm_source=qr'>
                    
                    <div className='ContactIccon'>
                    <FaInstagram size={30} color='red'/>
                    </div>
                    </a>

                    <a href='https://www.facebook.com/profile.php?id=100080568897119&mibextid=ibOpuV'>
                    <div className='ContactIccon'>
                    <FaFacebook size={30} color='blue'/>
                    </div>
                    </a>

                    <a href='https://x.com/__morsh?s=21'>
                    <div className='ContactIccon'>
                    <FaXTwitter size={30} color='white'/> 
                    </div>
                    </a>

                    <a href='https://youtube.com/@midemorsh?si=EeVDCyFHJzSqCokr'>
                    <div className='ContactIccon'>
                    <IoLogoYoutube size={30} color='red'/>
                    </div>
                    </a>

                </div>
            </div>
        </div>
    )
}


export default Contactme