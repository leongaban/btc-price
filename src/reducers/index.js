// Action Types
import { GET_COIN_PRICE } from '../actionTypes';

const initialState = {
  price: 0
};

export default (state = initialState, action) => {
  const { price } = action;

  switch (action.type) {
    case GET_COIN_PRICE:
      return {
        ...state,
        price
      };

    default:
      return state;
  }
};
