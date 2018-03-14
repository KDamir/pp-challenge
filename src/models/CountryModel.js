import {
  serializable,
  object,
  identifier
} from 'serializr';
import CurrencyModel from "./CurrencyModel";

export default class CountryModel {

  @serializable(identifier())
  id;

  @serializable
  value;

  @serializable
  label;

  @serializable(object(CurrencyModel))
  currency;

  constructor(id, value, label, currency) {
    this.id = id;
    this.value = value;
    this.label = label;
    this.currency = currency;
  }
}
