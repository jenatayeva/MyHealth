import React, {Fragment} from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Hero-HomePage/Home';
import Hero from './pages/Hero-HomePage/Hero';
import './style/App.scss';

const App = () =>  {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* <Route exact path='/' element={<Hero/>} /> */}
        <Route exact path='/about' element={<About />} />
      </Routes>
        <Hero/>
    </BrowserRouter>
  )
}

export default App;
