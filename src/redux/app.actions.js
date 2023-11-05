export const SET_LOADING = 'APP/SET_LOADING';
export const ADD_TO_CART = 'APP/ADD_TO_CART';
export const REMOVE_ITEM = 'APP/REMOVE_ITEM';

// action creator
export const setLoading = payload => ({
  type: SET_LOADING,
  payload
})

export const addToCart = payload => ({
  type: ADD_TO_CART,
  payload
})

export const removeItem = payload => ({
  type: REMOVE_ITEM,
  payload
})