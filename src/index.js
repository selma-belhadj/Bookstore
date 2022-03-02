import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './redux/configureStore';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);

reportWebVitals();
