import {observable} from 'mobx';

export default class DropDownStore {
  @observable selectedCountry = '';
  @observable selectedCurrency = '';
  @observable countries = [];
  @observable currencies = [];
}