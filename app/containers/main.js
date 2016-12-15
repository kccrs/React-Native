import React, {Component} from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from '../components/App';
import user from '../reducers/user'

const store = createStore(user);

export default class Main extends Component {
  render(){
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
