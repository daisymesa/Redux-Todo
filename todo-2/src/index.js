import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'react-redux';
import { Provider } from 'react-redux';


//Set up createStore function to receive the reducer
const store = createStore(App)

//Wrapping main React component inside of Provider tags
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

