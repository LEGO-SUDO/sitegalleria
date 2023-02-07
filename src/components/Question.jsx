import React from 'react'
import { Questions } from '../data'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

const Question = () => {
  return (
    <div
      className=' bg-white m-2 border border-solid border-gray-500  rounded-md shadow-md shadow-gray-400'
      style={{ height: '87%', width: '99%' }}
    >
      {Questions.map((item) => (
        <div>
          <div className='w-full flex h-8 font-semibold bg-blue-500 rounded-t-md justify-between items-center text-white'>
            <div className='m-1'> Q No.: {item.id} </div>
            <div className='m-1'>
              view in:
              <select className='text-black ml-2'>
                <option value='fruit' className='text-center '>
                  English
                </option>

                <option value='vegetable' className='text-center'>
                  Hindi
                </option>
              </select>
            </div>
          </div>
          <div className=' flex' style={{ height: '95%' }}>
            <div className='w-1/2  h-full border-r border-solid border-gray-200'>
              <div className='w-full h-8 border-b border-solid mt-2 ml-2 border-gray-200 text-blue-700 font-semibold'>
                QUESTION INSTRUCTION
              </div>
              <div className='w-full ' style={{ height: '93%' }}>
                {item.instruction}
              </div>
            </div>
            <div className='w-1/2 h-full'>
              <div className='w-full h-8 border-b border-solid mt-2 ml-2 text-blue-700 border-gray-200 font-semibold'>
                QUESTION
              </div>
              <div className='w-full mb-10' style={{ height: '93%' }}>
                {item.desc}
                <img src={item.img} alt='' className='h-36 m-2 w-11/12'></img>
              </div>

              <FormControl
                sx={{
                  width: '100%',
                }}
              >
                <FormLabel id='demo-radio-buttons-group-label'>
                  Select the answers
                </FormLabel>
                <RadioGroup
                  aria-labelledby='demo-radio-buttons-group-label'
                  defaultValue='female'
                  name='radio-buttons-group'
                >
                  <FormControlLabel
                    value={item.option1}
                    control={<Radio />}
                    label={`(A). ${item.option1}`}
                    sx={{
                      borderBottom: 'solid',
                      height: '70px',
                      margin: '4',
                      borderBlockColor: '#f0f2f5',
                    }}
                  />
                  <FormControlLabel
                    value={item.option2}
                    control={<Radio />}
                    label={`(B). ${item.option2}`}
                    sx={{
                      borderBottom: 'solid',
                      height: '70px',
                      margin: '4',
                      borderBlockColor: '#f0f2f5',
                    }}
                  />
                  <FormControlLabel
                    value={item.option3}
                    control={<Radio />}
                    label={`(C). ${item.option3}`}
                    sx={{
                      borderBottom: 'solid',
                      height: '70px',
                      margin: '4',
                      borderBlockColor: '#f0f2f5',
                    }}
                  />
                  <FormControlLabel
                    value={item.option4}
                    control={<Radio />}
                    label={`(D). ${item.option4}`}
                    sx={{
                      borderBottom: 'solid',
                      height: '70px',
                      margin: '4',
                      borderBlockColor: '#f0f2f5',
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Question
