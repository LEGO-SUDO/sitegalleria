import React from 'react'
import dp from './assets/dp1.jpg'

const Profile = () => {
  return (
    <div
      className='w-full bg-teal-100 border border-solid border-gray-500  rounded-md flex flex-row'
      style={{ height: '16%' }}
    >
      <div>
        <img src={dp} alt='' className='max-h-24 m-2 rounded-sm'></img>
      </div>
      <div>
        <div className='mt-2 font-semibold'>Time left:</div>
        <div className='mt-4 font-semibold'>Name</div>
      </div>
    </div>
  )
}

export default Profile
