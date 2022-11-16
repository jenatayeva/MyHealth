import React from 'react';
import DoctorList from '../Doctor/DoctorList';
import Section from '../layout/Section';

const Doctors = () => {
  return (
    <Section className='doctors-page'>
      <div className='container container-doctors'>
        <div className='title'>Meet out <span>doctors</span></div>
        <DoctorList />
        <div className='btn btn-center'>
          <button>
            See all doctors
            <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </Section>
  )
}

export default Doctors