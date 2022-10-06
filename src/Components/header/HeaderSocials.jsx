import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin size={70}/></a>
        <a href="https://github.com" target="_blank"><FaGithub size={70}/></a>
        
    </div>
  )
}

export default HeaderSocials