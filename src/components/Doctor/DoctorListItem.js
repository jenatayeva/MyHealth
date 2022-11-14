import React from 'react'


const DoctorListItem = ({ item }) => {
  const { title, src, branch } = item;
  return (
    <div className='card-circle'>
      <div className='card-img'>
        <img src={src} alt={title} />
      </div>
      <div className='card-title'>
        <p className='p-black p-bold'>{title}</p>
        <p className='p-gray'>{branch}</p>
      </div>
    </div>
  )
}

export default DoctorListItem