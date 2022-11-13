import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Navbar from './components/layout/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import './style/App.scss';

const App = () =>  {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
