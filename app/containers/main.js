import React, {Component} from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import App from '../components/App';

export default class Main extends Component {
  render(){
    return (
      <App />
    );
  }
}
