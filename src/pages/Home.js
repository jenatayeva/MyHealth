import React, {Fragment} from 'react'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import Hospitals from '../components/home/Hospitals'

const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Services />
      <Hospitals/>
    </Fragment>
  )
}

export default Home