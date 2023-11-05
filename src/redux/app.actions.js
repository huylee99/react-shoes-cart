export const SET_LOADING = 'APP/SET_LOADING';
export const ADD_TO_CART = 'APP/ADD_TO_CART';

// action creator
export const setLoading = payload => ({
  type: SET_LOADING,
  payload
})

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload
})