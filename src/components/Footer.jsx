import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
      <hr className="border-solid border-1 border-red-600" />
      <div className='flex justify-end items-center p-4'>
        <div className="m-2 p-1">
          <a className="text-3xl text-[#DC2626] hover:text-light-white" href="https://github.com/Jaybird456" target="_blank"><FaGithub /></a>
        </div>
        <div className="m-2 p-1">
        <a className='text-3xl text-[#DC2626] hover:text-light-white' href="https://www.linkedin.com/in/jayla-nicholas/" target="_blank"><FaLinkedin /></a>
        </div>
        <p className='p-1 m-2 text-light-white text-base'>Created and Designed by Jayla Nicholas &#169;</p>
      </div>
    </div>
  )
}

export default Footer