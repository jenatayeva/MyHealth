import React, {Fragment} from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Hospitals from '../components/home/Hospitals'
import Doctors from '../components/home/Doctors';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Hospitals/>
      <Doctors/>
    </>
  )
}

export default Home