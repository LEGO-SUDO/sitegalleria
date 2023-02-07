import React from 'react'

const Sections = () => {
  return (
    <div className='flex bg-white h-10 border-solid border-b border-gray-400'>
      <button className=' m-1 w-40 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105 duration-500'>
        All sections
      </button>
      <button className='m-1 w-40 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105 duration-500'>
        Maths
      </button>
      <button className='m-1 w-40 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibol rounded-md hover:scale-105 duration-500'>
        Physics
      </button>
      <button className='m-1 w-40 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105 duration-500'>
        Chemistry
      </button>
    </div>
  )
}

export default Sections
