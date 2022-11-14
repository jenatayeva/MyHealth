import React from 'react'

const HospitalListItem = ({ item }) => {
  const { title, src } = item;
  return (
    <div className='card-item'>
      <div className='card-img'>
        <img src={src} alt={title} />
      </div>
      <div className='card-title'>
        <p className='p-black p-bold'>{title}</p>
      </div>
    </div>
  )
}

export default HospitalListItem