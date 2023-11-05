import * as appAction from './app.actions';

const initialState = {
  isLoading: false,
  carts: []
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case appAction.SET_LOADING:
      return {
        ...state,
        isLoading: payload 
      }
    case appAction.ADD_TO_CART: 
      return {
        ...state,
        carts: [...state.carts, payload]
      }
    default:
      return state;
  }
}