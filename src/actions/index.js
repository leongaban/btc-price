// Services
import { getCoinPrices } from '../services/api';
import { pluckGdaxPrice } from '../utils/coinPrice';

// Action Types
import { GET_COIN_PRICE } from '../actionTypes';

// Utils
import { floor } from '../utils/math';

// Action creators
export function get(price) {
  return { type: GET_COIN_PRICE, price };
}

// GET coin data from the coinmarketcap API.
export const getCoin = (name) => dispatch => getCoinPrices(name).then((res) => {
  const coinPrice = floor(pluckGdaxPrice(res.data));
  console.log('coinPrice', coinPrice)
  dispatch(get(coinPrice));
});
