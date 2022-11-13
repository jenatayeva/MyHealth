import React from 'react'
import '../../style/App.scss'


const Sections = () => {
  return (
    <section id='SectionPage'>
      <div className='container container-section'>
        <div className='text'>
          <h3 className='h3-blue'>MyHealth free solution</h3>
          <h1 className='h1-black'>MyHealth free solution</h1>
        </div>
        <div className='sections'>
          <div className='card'>
            <div className='inner-card'>
              <img src='' />
              <h3 className='h3-black'>Search Doctor</h3>
              <p className='p-gray'>Registration for a check at the clinic needed for treatment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sections