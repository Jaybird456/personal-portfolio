import { useState } from 'react'
import {Link} from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [nav,setNav] = useState(false);


  return (
    <div>
        <nav>
            <ul className='md:flex justify-end w-full h-25 p-8 text-red-600 text-lg fixed hidden'>
                <li className='p-2 cursor-pointer hover:text-light-white' ><Link to='home' smooth={true} duration={500} >Home</Link></li>
                <li className='p-2 cursor-pointer hover:text-light-white'><Link to='skills' smooth={true} duration={500} >Skills</Link></li>
                <li className='p-2 cursor-pointer hover:text-light-white'><Link to='contact' smooth={true} duration={500} >Contact</Link></li>
            </ul>
        </nav>

        <div onClick={() => setNav(!nav)} 
        className='cursor-pointer md:hidden flex justify-end p-2 m-3 text-red-600 relative z-10'>
          {nav ? <FaTimes size={40} /> : <FaBars size={40} />}
        </div>
        
        {nav &&(
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-light-black text-red-600 text-lg'>
            <li className='p-2 text-4xl cursor-pointer hover:text-light-white' ><Link to='home' smooth={true} duration={500} onClick={() =>setNav(!nav)} >Home</Link></li>
            <li className='p-2 text-4xl cursor-pointer hover:text-light-white'><Link to='skills' smooth={true} duration={500} onClick={() =>setNav(!nav)} >Skills</Link></li>
            <li className='p-2 text-4xl cursor-pointer hover:text-light-white'><Link to='contact' smooth={true} duration={500} onClick={() =>setNav(!nav)} >Contact</Link></li>
        </ul>
        )}
        


    </div>
    
  )
}

export default Navbar