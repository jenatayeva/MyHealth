import React from 'react'
import HospitalInfo from '../components/Hospital/HospitalInfo'
import ReletedDoctors from '../components/layout/ReletedDoctors'
import Section from '../components/layout/Section'
import Button from '../components/layout/Button'


const HospitalDetails = () => {
  return (
    <Section>
      <HospitalInfo/>
      <ReletedDoctors/>
      <Button className='btn-blue'>Load More</Button>
    </Section>
  )
}

export default HospitalDetails