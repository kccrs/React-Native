import React, {Component} from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/index'

const store = createStore(reducers);

export default class Main extends Component {
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
