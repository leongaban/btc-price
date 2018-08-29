/* eslint-disable no-console */
import axios from 'axios';

import { key } from '../nomicsKey';

//http://docs.nomics.com/#operation/getMarketPrices
// const nomics = 'https://api.nomics.com/v1/markets/prices?key=';

// const pricesEnpoint = coinId => `${nomics}${key}&currency=${coinId}`;

export const getCoinPrices = name => {
  console.log('getCoinPrices name:', name);
  return axios.get(
    `https://api.nomics.com/v1/markets/prices?key=${key}&currency=${name}`
  )
  .catch(err => console.error(err))
  .then((res) => res);

  // console.log('pricesEnpoint(name):', pricesEnpoint(name));
  // return axios({
  //   'method': 'GET',
  //   'url': pricesEnpoint(name)
  // })
  //   .catch(err => console.error(err))
  //   .then(res => res);
}
