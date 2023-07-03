import {Link} from 'react-scroll'
import {FaLinkedin, FaGithub} from 'react-icons/fa'


const Home = () => {
  return (
    <div className='lg:flex lg:justify-between lg:mx-4 lg:p-4 lg:h-screen' name='home'>
          <div className='my-auto px-4 h-auto w-auto md:m-4 md:p-4 md:pt-20'>
            <p className='text-light-white text-lg my-1 py-1'>Hi, I'm </p>
            <h1 className="text-6xl md:text-7xl">Jayla Nicholas</h1>
            <p className='text-light-white text-2xl my-2'>Front-end Developer</p>
            <div className='border-solid border-2  border-red-600 rounded-full 
                            text-center text-light-white text-lg 
                            hover:border-light-white cursor-pointer w-[150px] p-2'>
                  <Link to='contact' smooth={true} duration={500} >Contact Me</Link>
            </div>
            <div className="flex flex-row text-4xl text-[#DC2626] m-auto">
              <a className='p-2' href="https://github.com/Jaybird456" target="_blank"><FaGithub /></a>
              <a className='p-2'href="https://www.linkedin.com/in/jayla-nicholas/" target="_blank"><FaLinkedin /></a>
            </div>
          </div>
      
        <div className="text-light-white indent-4 p-4 m-auto text-base md:text-lg">
          <p className="py-2">
            I'm a front-end developer with a passion for creating, building, 
            and problem-solving. My journey in web development began in high 
            school when I discovered my love for drawing and building things. 
            Since then, I've honed my skills and gained experience in building 
            and maintaining websites using WordPress, as well as working with the databases using mySQL and Bash. 
            </p>
            <p className='py-2'>
              My main area of expertise is front-end development, where I excel in HTML, 
              CSS, JavaScript, Typescript. I am also proficient in intermediate level tailwind CSS, and 
              React. I love the challenge that coding presents,
              as every website and problem is unique, and it constantly pushes me to think differently.
              Coding also satisfies my inner builder, as I love the process of putting things together.
            </p>
        </div>
  </div>
  )
}

export default Home