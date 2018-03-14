import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DropDownStore from './store/DropDownStore';
import registerServiceWorker from './registerServiceWorker';

const store = DropDownStore.createStore();
store.subscribeLocalstorageToStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
