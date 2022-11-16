import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Home from './pages/Home';
import HospitalDetails from './pages/HospitalDetails';
import Hospitals from './pages/Hospitals';
import './style/App.scss';

const App = () =>  {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/hospitals' element={<Hospitals/>}/>
        <Route exact path='/doctors' element={<Doctors/>}/>
        <Route exact path='/hospitals/:id' element={<HospitalDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
