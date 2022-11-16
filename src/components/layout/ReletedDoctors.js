import React from 'react'
import DoctorList from '../Doctor/DoctorList'


const ReletedDoctors = () => {
  return (
    <div>
      <h1 className='container' style={{padding:'2rem 0', fontSize: '2rem'}}>Doctors</h1>
      <DoctorList/>
    </div>
  )
}

export default ReletedDoctors