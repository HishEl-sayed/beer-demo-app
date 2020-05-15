import { combineReducers } from 'redux'

import beersReducer from './beersReducer'
import basketReducer from './basketReducer'

const rootReducer = combineReducers({
  beers: beersReducer,
  basket: basketReducer
})

export default rootReducer