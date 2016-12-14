import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <Text style={styles.headline}>Sanity Check</Text>
    )
  }
}

const styles = StyleSheet.create({
  headline: {
    fontSize: 32,
    margin: 40
  }
})
