import React from 'react'
import HospitalListItem from './HospitalListItem'
import Picture1 from '../../imgs/ene-mahri.png'
import Picture2 from '../../imgs/Gayragoyulmasyz.png'
import Picture3 from '../../imgs/kardialogiya.png'
import Picture4 from '../../imgs/tramva.png'

const hospitalsArray = [
  {
    title: 'Lorem 1',
    // just assign a variable like this:
    src: Picture1
  },
  {
    title: 'Lorem 2',
    src: Picture2
  },
  {
    title: 'Lorem 3',
    src: Picture3
  },
  {
    title: 'Lorem 4',
    src: Picture4
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