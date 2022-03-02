import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './js/App';
import { store } from './js/store/store';

import './styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.App')
);
