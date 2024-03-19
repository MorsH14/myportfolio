import { Link } from 'react-scroll'
import { BsChatRightTextFill } from "react-icons/bs";
import './nav.css'
import { useState } from 'react';


const Nav = () => {


    const [show, setShow] = useState(false)


    const handleclick = ()=>{
        setShow(!show)
    }

    return (
        <div className='navContainer'>
            <div>
                <h1>MORSH</h1>
            </div>
            <div className={show ? "show" : 'linkContainer'} id='nav'>
                <a className='navRoute'href='#home'>Home</a>
                <a className='navRoute' href='#about'>About</a>
                <a className='navRoute' href='#project'>Projects</a>
                <a className='navRoute' href='#contact'>Contact Me</a>
            </div>
            
           <a href='#contact' className='button'><BsChatRightTextFill /> Contact me</a> 

            <img src='./assets/btn.jpg' alt='' width="30px" className='img' onClick={handleclick}/>

        </div>
    )
}

export default Nav