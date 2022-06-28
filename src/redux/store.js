import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReduser from './rootReduser'

const middleware =applyMiddleware(thunk)

export const store=createStore(rootReduser,middleware)