export const GET_BEERS = 'GET_BEERS'
export const GET_BEERS_SUCCESS = 'GET_BEERS_SUCCESS'
export const GET_BEERS_FAILED = 'GET_BEERS_FAILED'

export const getBeers = () => ({
  type: GET_BEERS,
})
  
export const getBeersSuccess = beers => ({
  type: GET_BEERS_SUCCESS,
  payload: beers,
})

export const getBeersFailed = () => ({
  type: GET_BEERS_FAILED,
})

export const fetchBeers = () => {
  return async dispatch => {
    dispatch(getBeers())
    try {
      const response = await fetch('https://api.punkapi.com/v2/beers?food=steak&per_page=80')
      const data = await response.json()
      dispatch(getBeersSuccess(data))
    } catch (error) {
      dispatch(getBeersFailed())
    }
  }
}
