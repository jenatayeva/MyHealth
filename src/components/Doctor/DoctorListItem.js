import React from 'react'


const DoctorListItem = ({ item }) => {
  const { title, src } = item;
  return (
    <div className='card-circle'>
      <div className='card-img-circle'>
        <img src={src} alt={title} />
      </div>
      <div className='card-title'>
        <p className='p-black p-bold'>{title}</p>
      </div>
    </div>
  )
}

export default DoctorListItem