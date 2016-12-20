import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers/index';

import App from '../components/App';

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
