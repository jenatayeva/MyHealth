import React from 'react'
import '../../style/App.scss'
import chatIcon from '../../imgs/chat.svg'
import calendarIcon from '../../imgs/calendar.svg'
import doctorIcon from '../../imgs/doctor.svg'
import searchIcon from '../../imgs/search.svg'


const Services = () => {
  return (
    <section id='SectionPage'>
      <div className='container container-section'>
        <div className='text'>
          <h3 className='h3-blue'>MyHealth free solution</h3>
          <h1 className='h1-black'>MyHealth free solution</h1>
        </div>
        <div className='services'>
          <div className='card'>
            <div className='inner-card'>
              <img src={doctorIcon} />
              <h3 className='h3-black'>Search Doctor</h3>
              <p className='p-gray'>Registration for a check at the clinic needed for treatment</p>
            </div>
          </div>
          <div className='card'>
            <div className='inner-card'>
              <img src={chatIcon} />
              <h3 className='h3-black'>Request cancellation</h3>
              <p className='p-gray'>Registration for a check at the clinic needed for treatment</p>
            </div>
          </div>
          <div className='card'>
            <div className='inner-card'>
              <img src={calendarIcon} />
              <h3 className='h3-black'>Make appointment</h3>
              <p className='p-gray'>Registration for a check at the clinic needed for treatment</p>
            </div>
          </div>
          <div className='card'>
            <div className='inner-card'>
              <img src={searchIcon} />
              <h3 className='h3-black'>Get Solutions</h3>
              <p className='p-gray'>Registration for a check at the clinic needed for treatment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services