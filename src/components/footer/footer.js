import './footer.css'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";



const Footer = ()=>{
    return(
        <div className="footerContainer">
            <div className="footerLeft" id='footer'>
                <h2>Get in Touch</h2>
                <p>lorem fv cdsscs cjcsc cjdsvhdshjcs ncks cnhcs djdskjcnm djdjckhs hcss hcscs jnchscs hjv cjsihikcs cshcks chscs cscmb khfkh</p>
                <p>
                <FaInstagram size={50}/>
                <CiLinkedin size={50}/>
                <FaWhatsapp size={50}/>
                </p>
            </div>

            
        </div>
    )
}


export default Footer