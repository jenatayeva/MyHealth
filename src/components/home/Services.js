import React from 'react'
import chatIcon from '../../imgs/chat.svg'
import calendarIcon from '../../imgs/calendar.svg'
import doctorIcon from '../../imgs/doctor.svg'
import searchIcon from '../../imgs/search.svg'
import Section from "../layout/Section";

const Services = () => {
  return (
    <Section className='services-wrapper'>
      <div className='container container-section'>
        <div className='text'>
          <h3 className='h3-blue'>MyHealth free solution</h3>
          <h1 className='h1-black'>MyHealth free solution</h1>
        </div>
        <div className='services'>
          <div className='card'>
            <img src={doctorIcon} alt='doctorIcon' />
            <h3 className='h3-black'>Search Doctor</h3>
            <p className='p-gray'>Registration for a check at the clinic needed for treatment</p>
          </div>
          <div className='card'>
            <img src={chatIcon} alt='chatIcon' />
            <h3 className='h3-black'>Request cancellation</h3>
            <p className='p-gray'>Registration for a check at the clinic needed for treatment</p>
          </div>
          <div className='card'>
            <img src={calendarIcon} alt='calendarIcon' />
            <h3 className='h3-black'>Make appointment</h3>
            <p className='p-gray'>Registration for a check at the clinic needed for treatment</p>
          </div>
          <div className='card'>
            <img src={searchIcon} alt='searchIcon' />
            <h3 className='h3-black'>Get Solutions</h3>
            <p className='p-gray'>Registration for a check at the clinic needed for treatment</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services