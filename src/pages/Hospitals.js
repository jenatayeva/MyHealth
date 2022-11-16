import React, {Fragment} from 'react';
import ListHeader from '../components/layout/ListHeader';
import Section from '../components/layout/Section';
import HospitalList from '../components/Hospital/HospitalList';

const Hospitals = () => {
  return (
    <Section>
      <ListHeader 
        title='Hospitals'
      />
      <HospitalList/>
    </Section>
  )
}

export default Hospitals