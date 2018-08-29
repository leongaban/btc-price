import React from 'react';

const BitcoinWidget = ({ logo, coin : { price }, refresh }) => {
  return (
    <div className="bitcoin-wrapper shadow">
      <header>
        <img src={logo} alt="Bitcoin Logo"/>
      </header>
      <div className="price">
        Coinbase
        ${price}
      </div>
      <button className="btn striped-shadow white" onClick={refresh}>
        <span>Refresh</span>
      </button>
    </div>
  );
}

export default BitcoinWidget;
