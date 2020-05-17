import {
  SET_SELECTED_BEER
} from '../actions/buyModalActions'
  
const initialState = {
  selectedBeer: {}
}
    
const buyModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_BEER:
      return { 
        selectedBeer: action.selectedBeer
      }
    default:
      return state
  }
}
  
export default buyModalReducer
  
    