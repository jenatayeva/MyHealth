import React,{Fragment} from 'react';
import CardItemCircle from '../Doctor/DoctorList';
import Section from '../layout/Section';

const Doctors = () => {
  return (
    <Section className='doctors-page'>
      <div className='container container-doctors'>
        <div className='title'>Meet out <span>doctors</span></div>
        <div className='cards'>
          <CardItemCircle/>
        </div>
        <div className='btn btn-center'>
          <button>
            See all doctors
            <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </Section>
  )
}

export default Doctors