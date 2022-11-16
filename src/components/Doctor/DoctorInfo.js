import React from 'react'
import { useParams } from 'react-router'
import Button from '../layout/Button'
import doctorImg from '../../imgs/doctor1.png'
const DoctorInfo = () => {
  const { name }= useParams()
  return (
    <div className='container'>
      <div className='doctor-info'>
        <div className='text-info'>
          <h1>{name}</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in commodo dictumst volutpat vestibulum elementum, ac. Lobortis in sodales sit ullamcorper imperdiet volutpat at iaculis. Interdum cursus diam ipsum tellus, quis. Non porta in pulvinar tortor sit sem. Duis iaculis vitae tortor id. Mi risus fermentum, etiam tempus ultrices. Faucibus tempus sed duis lectus etiam. Nulla eget nulla velit luctus sem urna. Arcu maecenas volutpat, dui, consequat in.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in commodo dictumst volutpat vestibulum elementum, ac. Lobortis in sodales sit ullamcorper imperdiet volutpat at iaculis. Interdum cursus diam ipsum tellus, quis. Non porta in pulvinar tortor sit sem. Duis iaculis vitae tortor id. Mi risus fermentum, etiam tempus ultrices. Faucibus tempus sed duis lectus etiam. Nulla eget nulla velit luctus sem urna. Arcu maecenas volutpat, dui, consequat in.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in commodo dictumst volutpat vestibulum elementum, ac.</p>
          <Button className='btn-blue'>Make an appointment <i className="fa-regular fa-calendar-check"></i></Button>
        </div>
        <div className='img-info'>
          <div className='img-circle'>
            <img src={doctorImg} alt='doctorImg'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorInfo