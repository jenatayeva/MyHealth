import React from 'react'

const Button = ({ children, className }) => {
  return (
    <div className='container center'>
      <button className={`btn ${className}`}>{children}</button>
    </div>
  )
}

export default Button;