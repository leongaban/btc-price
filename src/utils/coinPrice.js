export const pluckGdaxPrice = data => {
  // Return only prices from the Coinbase GDAX exchange.
  const gdaxExchange = data.filter(d => d.exchange = 'gdax');
  // Return the first timestamped USD price (latest price).
  console.log('gdaxExchange', gdaxExchange)
  const gdaxUsd = gdaxExchange.filter(d => d.quote = 'USD')[0];
  return gdaxUsd.price;
}
