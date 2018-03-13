import {
  serializable, reference, identifier
} from 'serializr';
import CurrencyModel from "./CurrencyModel";
import { observable } from 'mobx';

export default class CountryModel {

  @serializable(identifier())
  id;

  @observable
  @serializable
  value;

  @observable
  @serializable
  label;

  @observable
  @serializable(reference(CurrencyModel))
  currency;

  constructor(id, value, label, currency) {
    this.id = id;
    this.value = value;
    this.label = label;
    this.currency = currency;
  }

  toJS() {
    return {
      id: this.id,
      value: this.value,
      label: this.label,
      currency: this.currency.toJS(),
    };
  }

  static fromJS(object) {
    return new CountryModel(
      object.id,
      object.value,
      object.label,
      CurrencyModel.fromJS(object.currency)
    );
  }

}