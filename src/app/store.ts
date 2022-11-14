import { configureStore } from '@reduxjs/toolkit'
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/iceCream/iceCreamSlice'
import userReducer from '../features/user/userSlice'
// const reduxLogger = require('redux-logger')


// const logger = reduxLogger.createLogger()


const store = configureStore({
    reducer:{
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch