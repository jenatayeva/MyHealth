import React, { Fragment } from 'react';
import CardItemSquire from '../Hospital/HospitalList';
// You can use Material UI icons (icons: https://mui.com/material-ui/material-icons/)
// import EastOutlinedIcon from '@mui/icons-material/EastOutlined';

const Hospitals = () => {
  return (
    <Fragment>
      <section id='HospitalsPage'>
        <div className='container container-hospitals'>
          <div className='title'>Hospitals</div>
          <div className='cards'>
            <CardItemSquire/>
          </div>
          <div className='btn btn-center'>
            <button>
              See all doctors
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Hospitals