import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <hr className="border-solid border-1 border-red-600" />
      <div className='flex justify-end items-center p-4'>
        <div className="m-2 p-2">
          <a href="https://github.com/Jaybird456" target="_blank"><FaGithub  size={40} color='#DC2626' /></a>
        </div>
        <div className="m-2 p-2">
        <a href="https://www.linkedin.com/in/jayla-nicholas/" target="_blank"><FaLinkedin size={40} color='#DC2626' /></a>
        </div>
        <p className='p-2 m-2 text-light-white text-lg'>Jayla Nicholas &#169;</p>
      </div>
    </div>
  )
}

export default Footer