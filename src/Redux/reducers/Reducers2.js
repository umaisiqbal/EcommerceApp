import {View, Text} from 'react-native';
import React from 'react';
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../ActionTypes';
const reducers2 = (state = [], action) =>  {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      const deteletdArray2 = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deteletdArray2;
    default:
      return state;
  }
};
export default reducers2