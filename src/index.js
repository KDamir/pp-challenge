import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DropDownStore from './DropDownStore';
import registerServiceWorker from './registerServiceWorker';

const storedModel = JSON.parse(
  localStorage.getItem('dropDownModel')
);
const store = DropDownStore.fromJS(storedModel || {});
store.subscribeLocalstorageToStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
