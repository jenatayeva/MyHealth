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
      <div className='container center'>
      <Button className='btn-blue'>Load More</Button>
      </div>
    </Section>
  )
}

export default HospitalDetails