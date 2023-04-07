import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imageId: 10000,
  api: {}
}

export const imageIdSlice = createSlice({
  name: 'imageId',
  initialState,
  reducers: {
    setAPI: (state, action) => { 
      return { ...state, api: action.payload }
    },
    incrementId: (state) => {
      return { ...state, imageId: state.imageId + 1 }
    },
    decrementId: (state) => {
      return { ...state, imageId: state.imageId - 1 }
    },
    setId: (state, action) => { 
      return { ...state, imageId: action.payload }
    },
    reset: () => { 
      return initialState 
    }
  }
})

export const { setAPI, incrementId, decrementId, setId, reset } = imageIdSlice.actions

export const imageIdReducer = imageIdSlice.reducer