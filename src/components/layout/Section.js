import React from 'react'

const Section = ({ children, className }) => {
  return (
    <section className={`layout-section ${className}`}>
      {children}
    </section>
  )
}

export default Section;
