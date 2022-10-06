import React from 'react'
import CV from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Descargar CV</a>
        <a href="#contact" className='btn btn-primary'>Tomemonos un cafecito :D</a>
    </div>
  )
}

export default CTA