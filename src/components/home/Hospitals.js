import React,{Fragment} from 'react';
import CardItemSquire from '../Hospital/HospitalList';


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
            <button>See all hospitals <i className="fa-regular fa-arrow-right"></i></button>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Hospitals