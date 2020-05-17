import { combineReducers } from 'redux'

import beersReducer from './beersReducer'
import basketReducer from './basketReducer'
import buyModalReducer from './buyModalReducer'

const rootReducer = combineReducers({
  beers: beersReducer,
  buyModal: buyModalReducer,
  basket: basketReducer
})

export default rootReducer