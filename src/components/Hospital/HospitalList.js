import React from 'react'
import HospitalListItem from './HospitalListItem'

const hospitalsArray = [
  {
    title: 'Lorem 1',
    src: '../../imgs/ene-mahri.svg'
  },
  {
    title: 'Lorem 2',
    src: '../../imgs/ene-mahri.svg'
  },
  {
    title: 'Lorem 3',
    src: '../../imgs/ene-mahri.svg'
  },
  {
    title: 'Lorem 4',
    src: '../../imgs/Garyragoyulmasyz.svg'
  }
]

const HospitalList = () => {
  return (
    <div>
      <h1>Hospitals</h1>
      {hospitalsArray.map((item, index) => (
        <HospitalListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default HospitalList