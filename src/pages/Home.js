import React, {Fragment} from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Hospitals from '../components/home/Hospitals'
import Doctors from '../components/home/Doctors';

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Hospitals/>
      <Doctors/>
    </Fragment>
  )
}

export default Home