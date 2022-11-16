import React from 'react'
import Section from '../components/layout/Section'
import DoctorList from '../components/Doctor/DoctorList'
import ListHeader from '../components/layout/ListHeader'

const Doctors = () => {
  return (
    <Section>
      <ListHeader title='Doctors'/>
      <DoctorList/>
    </Section>
  )
}

export default Doctors