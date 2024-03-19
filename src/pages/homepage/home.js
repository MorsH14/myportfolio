import About from '../../components/about/about'
import Contactme from '../../components/contactme/contact'
import Footer from '../../components/footer/footer'
import Intro from '../../components/intro/intro'
import Nav from '../../components/nav/nav'
import Project from '../../components/projects/project'
import './home.css'


const Home = ()=>{
    return(
        <div className="">
            <Nav/>
            <Intro/>
            <About/>
            <Project/>
            <Contactme/>
            <Footer/>
        </div>
    )
}


export default Home