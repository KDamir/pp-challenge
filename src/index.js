import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DropDownStore from './DropDownStore';
import registerServiceWorker from './registerServiceWorker';

const store = new DropDownStore();

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
