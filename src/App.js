import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/homepage/home';
import Nav from './components/nav/nav';
import Error from './pages/404/404';
import Footer from './components/footer/footer';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Project from './components/projects/project';
import Contactme from './components/contactme/contact';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/nav' element={<Nav/>}/>
      <Route path='/intro' element={<Intro/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/contact' element={<Contactme/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
  );
}

export default App;
