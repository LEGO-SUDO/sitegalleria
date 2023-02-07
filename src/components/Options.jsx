import React from 'react'
import { useDispatch } from 'react-redux'
import { attempted, reviewans, dump } from '../redux/questionRedux'

const Options = () => {
  const dispatch = useDispatch()
  const handleDump = () => {
    dispatch(dump())
  }
  const handleNext = () => {
    dispatch(attempted())
  }
  const handleReview = () => {
    dispatch(reviewans())
  }

  return (
    <div>
      <button className='m-1 ml-2 w-40 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105 duration-500'>
        CLEAR RESPONSE
      </button>
      <button
        className='m-1  w-40 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105 duration-500'
        onClick={handleReview}
      >
        REVIEW
      </button>
      <button
        className='m-1 w-40 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105 duration-500'
        onClick={handleDump}
      >
        DUMP
      </button>
      <button className='m-1 w-40 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105 duration-500'>
        PREVIOUS
      </button>
      <button
        className='m-1 w-40 bg-gradient-to-b from-blue-300 via-blue-400 to-blue-400 text-white font-semibold rounded-md hover:scale-105 duration-500'
        onClick={handleNext}
      >
        NEXT
      </button>
    </div>
  )
}

export default Options
