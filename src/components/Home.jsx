import {Link} from 'react-scroll'
import {FaLinkedin, FaGithub} from 'react-icons/fa'


const Home = () => {
  return (
    <div name='home'>
      <div className="p-4 m-auto h-screen flex flex-col justify-between items-center md:flex-row sm:ml-24">
          <div className='md:mt-10'>
            <p className='text-light-white  sm:text-4xl my-2 py-3'>Hi, I'm </p>
            <h1 className="text-5xl my-2 md:text-7xl">Jayla Nicholas</h1>
            <p className='text-light-white my-2 mb-6 py-1 text-xl sm:text-2xl'>Front-end Developer</p>
            <div className='border-solid border-2 w-2/6 md:w-3/6 lg:w-2/6 border-red-600 rounded-full text-center text-light-white 
              py-2 px-3  text-md sm:text-lg hover:border-light-white cursor-pointer'>
                  <Link to='contact' smooth={true} duration={500} >Contact Me</Link>
            </div>
            <div className="p-2 pt-5 flex gap-4">
              <a href="https://github.com/Jaybird456" target="_blank"><FaGithub  size={40} color='#DC2626' /></a>
              <a href="https://www.linkedin.com/in/jayla-nicholas/" target="_blank"><FaLinkedin size={40} color='#DC2626' /></a>
            </div>
          </div>
      
        <div className="m-auto text-md w-full sm:w-5/6 sm:mx-5 lg:mx-24">
          <p className="text-light-white indent-4">
            I'm a front-end developer with a passion for creating, building, 
            and problem-solving. My journey in web development began in high 
            school when I discovered my love for drawing and building things. 
            Since then, I've honed my skills and gained experience in building 
            and maintaining websites using WordPress, as well as working with the backend. 
            My main area of expertise is front-end development, where I excel in HTML, 
            CSS, JavaScript, Typescript, and Java. I am also proficient in intermediate level tailwind CSS,
            React, Python, C++, and Chakra UI. I love the challenge that coding presents,
            as every website and problem is unique, and it constantly pushes me to think differently.
          Coding also satisfies my inner builder, as I love the process of putting things together.
          </p>
        </div>
    </div>
  </div>
  )
}

export default Home