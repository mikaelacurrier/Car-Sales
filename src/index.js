import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer, applyMiddleware(thunk));


const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, rootElement);
