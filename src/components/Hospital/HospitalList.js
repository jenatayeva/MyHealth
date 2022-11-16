import React from 'react'
import HospitalListItem from './HospitalListItem'
import Picture1 from '../../imgs/ene-mahri.png'
import Picture2 from '../../imgs/Gayragoyulmasyz.png'
import Picture3 from '../../imgs/kardialogiya.png'
import Picture4 from '../../imgs/tramva.png'

const hospitalsArray = [
  {
    title: 'Ene-Mahri',
    src: Picture1
  },
  {
    title: 'Gayragoyulmasyz',
    src: Picture2
  },
  {
    title: 'Kardiyalogiya mekezi',
    src: Picture3
  },
  {
    title: 'Shikesleri bejerish merkezi',
    src: Picture4
  },
  {
    title: 'Ene-Mahri',
    src: Picture1
  },
  {
    title: 'Gayragoyulmasyz',
    src: Picture2
  },
  {
    title: 'Kardiyalogiya mekezi',
    src: Picture3
  },
  {
    title: 'Shikesleri bejerish merkezi',
    src: Picture4
  }
]

const HospitalList = () => {
  return (
    <div className='cards container'>
      {hospitalsArray.map((item, index) => (
        <HospitalListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default HospitalList