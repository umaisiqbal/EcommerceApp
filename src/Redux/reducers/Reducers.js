import {ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST} from '../ActionTypes';
const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      const deteletdArray1 = state.filter((item, index) => {
        return index !== action.payload;})
        
        return deteletdArray1;

       
    default:
      return state;
  }
};
export default reducers
