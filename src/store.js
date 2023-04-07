import { configureStore } from '@reduxjs/toolkit'
import { imageReducer } from './features/imageSlice'
import { logger } from './features/middleware'

export const store = configureStore({
    reducer: {
      image: imageReducer
    },
    middleware: [ logger ]
})
