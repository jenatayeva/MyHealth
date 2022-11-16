import React from 'react'
import Section from '../components/layout/Section'
import DoctorList from '../components/Doctor/DoctorList'
import ListHeader from '../components/layout/ListHeader'

const Doctors = () => {
  return (
    <Section className='p-5'>
      <ListHeader title='Doctors'/>
      <div className='p-2'>
        <DoctorList/>
      </div>
    </Section>
  )
}

export default Doctors