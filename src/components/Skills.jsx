import React from 'react'
const Skills = ({name, icon}) => {
  return (
    <div>
        {icon}
        <p className='text-light-white text-md w-100 text-center p-1 '>{name}</p>
    </div>
  )
}

export default Skills