// import React from 'react';
// import { Provider } from 'react-redux';
//
// // Containers
// import BitcoinContainer from './containers/BitcoinContainer';
//
// // Store
// import store from './store';
//
// const App = () => (
//   <Provider store={store}>
//     <BitcoinContainer />
//   </Provider>
// );
//
// export default App;


const React = require('react');
const axios = require('axios');

const key = '8feb5b31914ce3584de5c396d7d65a39';
const coinId = 'BTC';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      prices: []
    }
  }

  componentDidMount() {
    axios.get(
      `https://api.nomics.com/v1/markets/prices?key=${key}&currency=${coinId}`
    ).then((response) => {
      console.log('response', response)
      this.setState({prices: response.data})
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Cryptoasset Prices</h1>
        <p>
          This is a demo of the <a href="https://docs.nomics.com">Nomics Cryptoasset API</a>.
        </p>
        <table>
          <thead>
            <tr>
              <td>Bitcoin</td>
              <td>Prices</td>
            </tr>
          </thead>
          <tbody>
            {this.state.prices.map((p) =>
              <tr key={p.currency}>
                <td>{p.currency}</td>
                <td>{p.price}</td>
              </tr>
            )}
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}

module.exports = App
