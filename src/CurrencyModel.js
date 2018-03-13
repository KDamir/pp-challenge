import {
  serializable, identifier
} from 'serializr';
import { observable } from 'mobx';


export default class CurrencyModel {

  @serializable(identifier())
  id;

  @observable
  @serializable
  value;

  @observable
  @serializable
  label;

  constructor(id, value, label) {
    this.id = id;
    this.value = value;
    this.label = label;
  }

  toJS() {
    return {
      id: this.id,
      value: this.value,
      label: this.label,
    };
  }

  static fromJS(object) {
    return new CurrencyModel(object.id, object.value, object.label);
  }

}