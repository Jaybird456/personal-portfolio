import React from 'react'
const Skills = ({name, icon}) => {
  return (
    <div>
        {icon}
        <p className='text-light-white text-sm text-center p-1 lg:text-base'>{name}</p>
    </div>
  )
}

export default Skills