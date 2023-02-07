import React from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const Legends = () => {
  return (
    <div
      className='w-full mt-1 bg-teal-100 border border-solid border-gray-500  rounded-md'
      style={{ height: '32%' }}
    >
      <div className='w-full font-semibold bg-blue-500 text-white rounded-t-md text-center'>
        <p>Legends (Click to view)</p>
      </div>
      <div className='w-full  rounded-b-md'>
        <div className='grid grid-flow-row grid-cols-2 text-center'>
          <p className='m-1 bg-green-400 text-center text-sm'>3 Answered</p>
          <p className='m-1 bg-red-400 text-center text-sm'>2 Not Answered</p>
          <p className='m-1 bg-purple-300 text-center text-sm'>1 Review+Ans</p>
          <p className='m-1 bg-yellow-300 text-center text-sm'>2 Review-Ans</p>
          <p className='m-1 bg-gray-300 text-center text-sm'>1 Dump</p>
          <p className='m-1 bg-white text-center text-sm'>1 Not visited</p>
        </div>
      </div>
      <div className='w-full mt-2 font-semibold bg-blue-500 text-white  text-center'>
        <Popup
          trigger={<button> Total 10 Questions </button>}
          position='left center'
        >
          <div>All the best for the exam!</div>
        </Popup>
      </div>
      <div className='grid grid-flow-row grid-cols-2 w-full'>
        <button className='m-1 h-8 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105'>
          Profile
        </button>
        <button className='m-1 h-8 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105'>
          Instr
        </button>
        <button className='m-1 h-8 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105'>
          Questions
        </button>
        <button className='m-1 h-8 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105'>
          Submit
        </button>
      </div>
    </div>
  )
}

export default Legends
