import { createSlice } from '@reduxjs/toolkit'

const questionSlice = createSlice({
  name: 'question',
  initialState: {
    status: 0,
  },
  reducers: {
    notvisited: (state, action) => {
      state.status = 0
    },
    attempted: (state, action) => {
      state.status = 1
    },
    notattempted: (state, action) => {
      state.status = 2
    },
    reviewans: (state, action) => {
      state.status = 3
    },
    reviewnoans: (state, action) => {
      state.status = 4
    },
    dump: (state, action) => {
      state.status = 5
    },
  },
})

export const {
  notvisited,
  notattempted,
  attempted,
  reviewans,
  reviewnoans,
  dump,
} = questionSlice.actions
export default questionSlice.reducer
