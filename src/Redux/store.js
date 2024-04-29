import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk'
import authReducer from './Auth/auth.reducer'



const rootReducers = combineReducers({
    auth:authReducer
})
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))


//this file will available to whole our application, we can access from anywhere within our application