import React from 'react'
import DoctorListItem from './DoctorListItem'
import Picture1 from '../../imgs/doctor1.png'
import Picture2 from '../../imgs/doctor2.png'
import Picture3 from '../../imgs/doctor3.png'
import Picture4 from '../../imgs/doctor3.png'

const doctorsArray = [
  {
    title: 'Jack Jones',
    branch: 'Brain Surgeon',
    src: Picture1
  },
  {
    title: 'Will Smith',
    branch: 'Heart Surgery',
    src: Picture2
  },
  {
    title: 'Jenn I',
    branch: 'Brain Surgery',
    src: Picture3
  },
  {
    title: 'Jill Jane',
    branch: 'Heart Surgery',
    src: Picture4
  }
]

const DoctorList = () => {
  return (
    <div className='cards container'>
      {doctorsArray.map((item, index, branch) => (
        <DoctorListItem key={index} item={item} branch={branch} />
      ))}
    </div>
  )
}

export default DoctorList