import React, {Fragment} from 'react';
import LogoText from '../../imgs/LogoWithText.png'

const Footer = () => {
  return (
    <Fragment>
      <section id='footer'>
        <div className='container'>
          <div className='container-footer'>
            <div className='logo'>
              <div className='logo-img'>
                <img src={LogoText} alt='logo'/>
              </div>
            </div>
            <div className='links'>
              <ul>
                <li className='li-bold'>Links</li>
                <li><a href='/hospitals'>Hospitals</a></li>
                <li><a href='/doctors'>Find Doctors</a></li>
                <li><a href='/about'>About</a></li>
              </ul>
            </div>
            <div className='hospitals'>
            <ul>
                <li className='li-bold'>Hospitals</li>
                <li>Hospital1</li>
                <li>Hospital2</li>
                <li>Hospital3</li>
              </ul>
            </div>
            <div className='subscribe'>
              <h3>Subscribe our newsletter</h3>
              <form>
                <input placeholder='Email address'/>
                <button className='btn-blue'>Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Footer