import { createStore, compose } from 'redux';
import { reducer } from './reducer';


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

export const store = createStore(reducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f));
