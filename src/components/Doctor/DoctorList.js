import React from 'react'
import DoctorListItem from './DoctorListItem'
import Picture1 from '../../imgs/doctor1.png'
import Picture2 from '../../imgs/doctor2.png'
import Picture3 from '../../imgs/doctor3.png'
import Picture4 from '../../imgs/doctor3.png'

const doctorsArray = [
  {
    title: 'Jack Jones',
    src: Picture1
  },
  {
    title: 'Will Smith',
    src: Picture2
  },
  {
    title: 'Jenn I',
    src: Picture3
  },
  {
    title: 'Jill Jane',
    src: Picture4
  }
]

const DoctorList = () => {
  return (
    <div className='doctorList'>
      {doctorsArray.map((item, index) => (
        <DoctorListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default DoctorList