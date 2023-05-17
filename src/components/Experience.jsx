import Skills from './Skills'
import {skills} from '../utils/constants.jsx'


const Experience = () => {

  return (
    <div name='skills'>
      <div className='p-4 m-auto sm:ml-24 sm:mt-32 h-screen flex flex-col lg:flex-row justify-between items-center'>
        <div>
          <h1 className='text-4xl sm:text-6xl my-2'>Skills</h1>
          <p className='text-light-white text-md sm:text-lg py-2 my-2'>Check out my  
            <a className='text-red-600 underline hover:text-light-white' href="https://www.linkedin.com/in/jayla-nicholas/" 
                target="_blank"> Linkedin </a> for Work Experience</p>
          <p className='text-light-white text-md sm:text-lg py-2 my-2 mb-4'>My main expertise is front end development. 
            Building small web applications and sites with HTML, CSS, JS, TS,and React.
            I can take Figma designs and make them into websites. 
            I have some experience with the backend side of a website using Firebase. </p>
        </div>
        <div className=' grid grid-cols-4 mt-3 items-center gap-3 lg:flex lg:flex-wrap lg:ml-32 llg:mx-32 lg:gap-10 xl:px-28'>
          {skills?.map((skill) =>(
              <Skills name={skill.name} icon={skill.icon} />
          ))}
        </div>
        </div>
    </div>
  )
}

export default Experience