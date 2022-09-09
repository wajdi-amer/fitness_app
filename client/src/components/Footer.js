import React from 'react'
import { BsLinkedin, BsGithub, BsTelephoneFill } from 'react-icons/bs';
import { SiGmail} from 'react-icons/si'

export default function Footer() {
  return (
    <div className='footer-container'>
      <hr></hr>
      <div className='icons-container'>
        <a href='https://www.linkedin.com/in/wajdi-am/' target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/wajdi-amer' target="_blank" rel="noopener noreferrer"><BsGithub/></a>
        <a href="mailto: wajdi.amerrr@gmail.com"><SiGmail/></a>
        <a href="tel: +972 58-424-1299"><BsTelephoneFill /></a>
        </div>
        <hr></hr>
        <div className='text-container'>
          <div>ABOUT US</div>
          <div>CONTACT US</div>
        </div>
    </div>
  )
}
