import React from 'react'
import { useSelector } from 'react-redux'

const QuestionPallette = () => {
  const status = useSelector((state) => state.question.status)
  return (
    <div
      className='w-full mt-1 bg-teal-100 border border-solid border-gray-500  rounded-md'
      style={{ height: '51%' }}
    >
      <div className='w-full font-semibold bg-blue-500 text-white rounded-t-md text-center'>
        Question Pallete
      </div>
      <div className='w-full  rounded-b-md' style={{ height: '92%' }}>
        <div className='grid grid-flow-row grid-cols-5'>
          <button
            className={` hover:scale-105 duration-500 m-1 ${
              status === 5
                ? 'bg-white'
                : status === 1
                ? 'bg-green-400'
                : status === 3
                ? 'bg-yellow-300'
                : 'bg-gray-300'
            } `}
          >
            Q1
          </button>
          <button className='bg-green-400 hover:scale-105 duration-500 m-1'>
            Q2
          </button>
          <button className='bg-green-400 m-1 hover:scale-105 duration-500'>
            Q3
          </button>
          <button className='bg-red-500 m-1 hover:scale-105 duration-500'>
            Q4
          </button>
          <button className='bg-yellow-300 m-1 hover:scale-105 duration-500'>
            Q5
          </button>
          <button className='bg-yellow-300  m-1 hover:scale-105 duration-500'>
            Q6
          </button>
          <button className='bg-green-400 m-1 hover:scale-105 duration-500'>
            Q7
          </button>
          <button className='bg-purple-400 m-1 hover:scale-105 duration-500'>
            Q8
          </button>
          <button className='bg-white m-1 hover:scale-105 duration-500'>
            Q9
          </button>
          <button className='bg-gray-300 m-1 hover:scale-105 duration-500'>
            Q10
          </button>
        </div>
      </div>
    </div>
  )
}

export default QuestionPallette
