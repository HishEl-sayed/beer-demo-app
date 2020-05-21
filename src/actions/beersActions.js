export const GET_BEERS = 'GET_BEERS'
export const GET_BEERS_SUCCESS = 'GET_BEERS_SUCCESS'
export const GET_BEERS_FAILED = 'GET_BEERS_FAILED'

export const getBeers = () => ({
  type: GET_BEERS,
})
  
export const getBeersSuccess = (beers, category) => ({
  type: GET_BEERS_SUCCESS,
  payload: beers,
  category
})

export const getBeersFailed = () => ({
  type: GET_BEERS_FAILED,
})

export const fetchBeers = (category) => {
  const constructCategory = () => {
    return category ? `https://api.punkapi.com/v2/beers?food=${category}&per_page=80` : 'https://api.punkapi.com/v2/beers?per_page=80'
  }
  return async dispatch => {
    dispatch(getBeers())
    try {
      const response = await fetch(constructCategory())
      const data = await response.json()
      dispatch(getBeersSuccess(data, category))
    } catch (error) {
      dispatch(getBeersFailed())
    }
  }
}
