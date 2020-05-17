import {
  GET_BEERS,
  GET_BEERS_SUCCESS,
  GET_BEERS_FAILED
} from '../actions/beersActions'

const initialState = {
  allBeers: [],
  loading: false,
  hasErrors: false
}
  
const beersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BEERS:
      return { 
        ...state, 
        loading: true
      }
    case GET_BEERS_SUCCESS:
      return { 
        allBeers: action.payload, 
        loading: false, 
        hasErrors: false 
      }
    case GET_BEERS_FAILED:
      return { 
        ...state, 
        loading: false, 
        hasErrors: true 
      }
    default:
      return state
  }
}

export default beersReducer

  