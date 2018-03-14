import {
  serializable,
  list,
  object,
  serialize,
  createSimpleSchema,
} from 'serializr';
import { observable } from 'mobx';
import CurrencyModel from "./CurrencyModel";
import CountryModel from "./CountryModel";

const ModelSchema = createSimpleSchema({
  selectedCurrency: object(CurrencyModel),
  selectedCountry: object(CountryModel),
  currencies: list(object(CurrencyModel)),
  countries: list(object(CountryModel)),
});

export default class DropDownModel {

  @observable
  @serializable(object(CountryModel))
  selectedCountry;

  @observable
  @serializable(object(CurrencyModel))
  selectedCurrency;

  @observable
  @serializable(list(object(CurrencyModel)))
  currencies;

  @observable
  @serializable(list(object(CountryModel)))
  countries;

  constructor(selectedCountry, selectedCurrency, currencies, countries) {
    this.selectedCurrency = selectedCurrency;
    this.selectedCountry = selectedCountry;
    this.currencies = currencies;
    this.countries = countries;
  }

  toJS() {
    return serialize(ModelSchema, this);
  }

  static createModel() {
    return new DropDownModel({}, {}, [], []);
  }

}