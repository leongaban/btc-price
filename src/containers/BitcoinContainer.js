import React from 'react';
import { connect } from 'react-redux';

// Images
import logo from '../imgs/bitcoin.png';

// Styles
import './bitcoin.css';

// Actions
import { getCoin } from '../actions';

// Components
import BitcoinWidget from '../components/bitcoinWidget';

class BitcoinContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      coin: null
    };

    const { coin } = this.state;

    if (!coin) {
      this.props.getCoin('BTC');
    }

    this.refresh = this.refresh.bind(this);
  }

  componentWillReceiveProps({ price }) {
    this.setState({
      coin: price
    });
  }

  refresh() {
    this.props.getCoin('BTC');
  }

  render() {
    const { coin } = this.state;
    const { price } = this.props;
    console.log('price', price)

    // If no price, return null.
    if (!coin || !coin.price) return null;

    const coinObj = {
      logo,
      coin,
      refresh: this.refresh
    };

    return (
      <div id="price-container">
        <BitcoinWidget {...coinObj} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCoin: (...args) => dispatch(getCoin(...args))
});

const mapStateToProps = ({ price }) => ({
  price
});

export const BitcoinContainerJest = BitcoinContainer;

export default connect(mapStateToProps, mapDispatchToProps)(BitcoinContainer);
