import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers';
import App from './components/App';

const store = createStore(allReducers);

ReactDOM.render(<App />, document.getElementById('root'));
