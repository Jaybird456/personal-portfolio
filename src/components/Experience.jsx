import Skills from './Skills'
import {skills} from '../utils/constants.jsx'


const Experience = () => {

  return (
    <div name='skills'>
      <div className='flex flex-col lg:flex-row justify-between items-center m-auto lg:h-screen lg:p-4'>
        <div className='lg:w-[40%]'>
          <h1 className='text-6xl px-4 m-auto text-center lg:text-left lg:text-7xl'>Skills</h1>
          <p className='text-light-white text-lg px-4 mb-2 lg:text-xl'>
            Check out my   
            <a className='text-red-600 hover:text-light-white' href="https://www.linkedin.com/in/jayla-nicholas/" 
                target="_blank"> Linkedin</a> for Work Experience</p>
          <p className='text-light-white text-base px-4 mx-auto my-2 indent-4 py-2 md:text-lg'>
            My main expertise is front end development. 
            Building small web applications and sites with HTML, CSS, JS, TS,and React.
            I can take Figma designs and make them into websites. 
            I have some experience working with databases, in mySQL. 
            </p>
        </div>
        <div className=' grid grid-cols-3 items-center gap-3 m-auto lg:flex lg:flex-wrap lg:gap-4 lg:w-[40%]'>
          {skills?.map((skill) =>(
              <Skills name={skill.name} icon={skill.icon} />
          ))}
        </div>
        </div>
    </div>
  )
}

export default Experience