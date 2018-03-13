import { observable, reaction } from 'mobx';
import DropDownModel from "./DropDownModel";

export default class DropDownStore {
  @observable dropDownModel = {};

  subscribeLocalstorageToStore() {
    reaction(
      () => this.toJS(),
      dropDownModel => {
        console.log(dropDownModel);
        localStorage.setItem('dropDownModel', JSON.stringify({ dropDownModel }))
      }
    );
  }

  toJS() {
    return this.dropDownModel.toJS();
  }

  static fromJS(object) {
    const store = new DropDownStore();
    store.dropDownModel = DropDownModel.fromJS(object);
    return store;
  }
}