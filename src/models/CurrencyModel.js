import {
  serializable,
  identifier
} from 'serializr';


export default class CurrencyModel {

  @serializable(identifier())
  id;

  @serializable
  value;

  @serializable
  label;

  constructor(id, value, label) {
    this.id = id;
    this.value = value;
    this.label = label;
  }
}
