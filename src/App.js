import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Project from './pages/Project';
import Getinvolved from './pages/Getinvolved';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contactus from './pages/Contactus';
import Footer from './components/Footer';
import Vform from './components/Vform';

function App() {
  return (
    <div className="">
        <Navbar/>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='aboutus' element={<Aboutus/>}/>
          <Route path='project' element={<Project/>}/>
          <Route path='getinvolved' element={<Getinvolved/>}/>
          <Route path='events' element={<Events/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='contactus' element={<Contactus/>}/>
          <Route path='vform' element={<Vform/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
