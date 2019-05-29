import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reducer from './reducers'

import { createStore } from 'redux';
import { Provider } from 'react-redux';


//Set up createStore function to receive the reducer
const store = createStore(reducer)
console.log(store);

//Wrapping main React component inside of Provider tags
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

