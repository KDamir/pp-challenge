import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { mapNotNull, convertCountries, convertCurrencies } from './utils';

const API_COUNTRIES = 'https://api.pleasepay.co.uk/countries';
const API_CURRENCIES = 'https://api.pleasepay.co.uk/currencies';

class App extends Component {

  state = {
    selectedCountry: '',
    selectedCurrency: '',
    countries: [],
    currencies: [],
  };

  componentDidMount() {
    this.fetchCountries();
    this.fetchCurrencies();
  }

  async fetchCountries() {
    await fetch(API_COUNTRIES)
      .then(response => response.json())
      .then(data => mapNotNull(data.items, convertCountries))
      .then(countries => this.setState({countries}));
  }

  async fetchCurrencies() {
    await fetch(API_CURRENCIES)
      .then(response => response.json())
      .then(data => mapNotNull(data.items, convertCurrencies))
      .then(currencies => this.setState({currencies}));
  }

  handleChangeCountry = (selectedCountry) => {
    this.setState({ selectedCountry: selectedCountry, selectedCurrency: selectedCountry.currency })
  };

  handleChangeCurrency = (selectedCurrency) => {
    this.setState({ selectedCurrency })
  };

  render() {
    const { selectedCountry, selectedCurrency, countries, currencies } = this.state;

    return (
      <div className="App">
        <Select
          name="countries"
          className="hide-options"
          style={{width: '200px'}}
          menuContainerStyle={{width: '200px'}}
          removeSelected={false}
          onChange={this.handleChangeCountry}
          value={selectedCountry && selectedCountry.value}
          options={countries}
        />

        <Select
          name="currencies"
          className="hide-options"
          style={{width: '200px'}}
          menuContainerStyle={{width: '200px'}}
          removeSelected={false}
          onChange={this.handleChangeCurrency}
          value={selectedCurrency && selectedCurrency.value}
          options={currencies}
        />
      </div>
    );
  }
}

export default App;
