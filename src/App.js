import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import './App.css';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { mapNotNull, convertCountries, convertCurrencies } from './utils';

const API_COUNTRIES = 'https://api.pleasepay.co.uk/countries';
const API_CURRENCIES = 'https://api.pleasepay.co.uk/currencies';

@observer
class App extends Component {

  componentDidMount() {
    this.fetchCountries();
    this.fetchCurrencies();
  }

  async fetchCountries() {
    await fetch(API_COUNTRIES)
      .then(response => response.json())
      .then(data => mapNotNull(data.items, convertCountries))
      .then(countries => this.storeCountries(countries));
  }

  async fetchCurrencies() {
    await fetch(API_CURRENCIES)
      .then(response => response.json())
      .then(data => mapNotNull(data.items, convertCurrencies))
      .then(currencies => this.storeCurrencies(currencies));
  }

  storeCountries(countries) {
    this.props.store.dropDownModel.countries = countries;
  }

  storeCurrencies(currencies) {
    this.props.store.dropDownModel.currencies = currencies;
  }

  handleChangeCountry = selectedCountry => {
    this.props.store.dropDownModel.selectedCountry = selectedCountry;
    this.props.store.dropDownModel.selectedCurrency = selectedCountry.currency;
  };

  handleChangeCurrency = selectedCurrency => {
    this.props.store.dropDownModel.selectedCurrency = selectedCurrency;
  };

  render() {
    const { selectedCountry, selectedCurrency, countries, currencies } = this.props.store.dropDownModel;

    return (
      <div className="App">
        <Select
          name="countries"
          className="hide-options"
          style={{width: '200px'}}
          menuContainerStyle={{width: '200px'}}
          onChange={this.handleChangeCountry}
          value={selectedCountry && selectedCountry.value}
          options={countries}
        />

        <Select
          name="currencies"
          className="hide-options"
          style={{width: '200px'}}
          menuContainerStyle={{width: '200px'}}
          onChange={this.handleChangeCurrency}
          value={selectedCurrency && selectedCurrency.value}
          options={currencies}
        />
      </div>
    );
  }
}

export default App;

App.propTypes = {
  store: PropTypes.object.isRequired,
};
