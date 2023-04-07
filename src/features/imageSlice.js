import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 10000,
  api: {}
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setAPI: (state, action) => { 
      return { ...state, api: action.payload }
    },
    incrementId: (state) => {
      return { ...state, id: state.id + 1 }
    },
    decrementId: (state) => {
      return { ...state, id: state.id - 1 }
    },
    setId: (state, action) => { 
      return { ...state, id: action.payload }
    },
    reset: () => { 
      return initialState 
    }
  }
})

export const { setAPI, incrementId, decrementId, setId, reset } = imageSlice.actions

export const imageReducer = imageSlice.reducer

export const fetchData = () => {
  const fetchDataThunk = async (dispatch, getState) => {
    const state = getState()
    const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.image.id}`)
    const api = await response.json()
    dispatch(setAPI(api))
  }
  return fetchDataThunk
}