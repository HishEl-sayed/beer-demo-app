import {
    ADD_TO_BASKET,
    REMOVE_FROM_BASKET
  } from '../actions/basketActions'
  
  const initialState = {
    basket: [],
  }
    
  const basketReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_BASKET:
        return { 
          ...state, 
          basket: [...state.basket].push(action.payload)
        }
    //   case REMOVE_FROM_BASKET:
    //     return { 
    //       allBeers: action.payload, 
    //       loading: false, 
    //       hasErrors: false,
    //       category: action.category
    //     }
      default:
        return state
    }
  }
  
  export default basketReducer
  
    