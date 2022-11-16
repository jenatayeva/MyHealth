import React, { Fragment } from 'react';
import HospitalList from '../Hospital/HospitalList';
import Section from '../layout/Section';
// You can use Material UI icons (icons: https://mui.com/material-ui/material-icons/)
// import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const Hospitals = () => {
  return (
    <Section className='hospitals-section bg'>
      <div className='container container-hospitals'>
        <div className='title'>Hospitals</div>
        <HospitalList/>
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

export default Hospitals