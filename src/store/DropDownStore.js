import { observable, reaction } from 'mobx';
import DropDownModel from "../models/DropDownModel";

export default class DropDownStore {
  @observable dropDownModel = {};

  subscribeLocalstorageToStore() {
    reaction(
      () => this.toJS(),
      dropDownModel => {
        localStorage.setItem('dropDownModel', JSON.stringify({ dropDownModel }))
      }
    );
  }

  toJS() {
    return this.dropDownModel.toJS();
  }

  static createStore() {
    const store = new DropDownStore();
    store.dropDownModel = DropDownModel.createModel();
    return store;
  }
}