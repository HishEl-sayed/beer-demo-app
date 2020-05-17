export const SET_SELECTED_BEER = 'SET_SELECTED_BEER'
  
export const setSelectedBeer = selectedBeer => ({
  type: SET_SELECTED_BEER,
  selectedBeer: selectedBeer,
})

export const selectBeer = (beerData) => {
  return dispatch => {
    dispatch(setSelectedBeer(beerData))
  }
}
