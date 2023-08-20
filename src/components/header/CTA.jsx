import React from 'react'
import CV from '../../Assets/Resume.pdf'
import './CTA.css'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Download CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      <a href="\" className='btn btn-secondary Blog'>Blog's</a>
    </div>
  )
}

export default CTA