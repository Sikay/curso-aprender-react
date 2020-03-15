import React, { Component } from "react";

class FetchExample extends Component {
  constructor() {
    super();
    this.state = { bpi: {} };
  }

  componentDidMount() {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then(res => res.json())
      .then(data => {
        const { bpi } = data;
        this.setState({ bpi });
      });
  }

  renderCurrencies() {
    console.log(this.state.bpi);
    const { bpi } = this.state;
    const currencies = Object.keys(bpi);
    return currencies.map(currency => (
      <div key={currency}>
        1 BTC is {bpi[currency].rate}
        <span>{currency}</span>
      </div>
    ));
  }

  render() {
    return (
      <div>
        <h4>Fetch example</h4>
        {this.renderCurrencies()}
      </div>
    );
  }
}

export default FetchExample;
