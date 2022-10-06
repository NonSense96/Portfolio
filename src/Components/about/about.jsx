import React from 'react'
import './about.css'
import me from '../../assets/me.png'
import me2 from '../../assets/jisus.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
        <div className="container about__container" >
          <div className="about__me">
              <div className="about__me-image">
            {/* <img src={me} alt='me'/> */}
            {/* <img src={me2} alt='me2' class="img-top"/> */}
            
              </div>
            </div>
            <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>3+ Years doing nothing</small>
                </article>
                <article className='about__card'>
                  <FiUsers className='about__icon'/>
                  <h5>Clients</h5>
                  <small>200+ Brasil do mundo</small>

                </article>
                <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Experience</h5>
                  <small>80+ Completed idwhat</small>          
                </article>          
              
              
                  <p>
                    gogogogo
                  </p>
                  <a href='#contact' className='btn btn-primary'>Contact</a>
                  </div>
              </div>         
             </div>      
    </section>
  )
}

export default about