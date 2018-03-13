import {
  serializable, list, object
} from 'serializr';
import { observable } from 'mobx';
import CurrencyModel from "./CurrencyModel";
import CountryModel from "./CountryModel";

export default class DropDownModel {

  @observable
  @serializable
  selectedCountry = '';

  @observable
  @serializable
  selectedCurrency = '';

  @observable
  @serializable(list(object(CurrencyModel)))
  currencies = [];

  @observable
  @serializable(list(object(CountryModel)))
  countries = [];

  constructor(selectedCountry, selectedCurrency, currencies, countries) {
    this.selectedCurrency = selectedCountry;
    this.selectedCountry = selectedCountry;
    this.currencies = currencies;
    this.countries = countries;
  }

  toJS() {
    return {
      selectedCountry: this.selectedCountry,
      selectedCurrency: this.selectedCurrency,
      currencies: this.currencies.map(currency => currency.toJS()),
      countries: this.countries.map(country => country.toJS()),
    };
  }

  static fromJS(object) {
    return new DropDownModel(
      object.selectedCountry === undefined ? '' : object.selectedCountry,
      object.selectedCurrency === undefined ? '' : object.selectedCurrency,
      object.currencies === undefined ? [] : object.currencies.map(currency => CurrencyModel.fromJS(currency)),
      object.countries === undefined ? [] : object.countries.map(country => CountryModel.fromJS(country))
    );
  }

}