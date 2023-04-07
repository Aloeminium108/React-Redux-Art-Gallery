import { configureStore } from '@reduxjs/toolkit'
import { imageIdReducer } from './features/imageIdSlice'

export const store = configureStore({
    reducer: {
      imageId: imageIdReducer
    }
})
