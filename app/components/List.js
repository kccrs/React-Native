import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  ListView,
  TabBarIOS,
  Navigator,
  ScrollView,
  Switch,
  Animated,
  Button
} from 'react-native';

import userContainer from '../containers/userContainer';
//
import Login from './Login';
import MapView from './MapView';
import Profile from './Profile';

export default class Settings extends Component {
  constructor (props) {
   super(props);
 }

  render() {
    return (
      <View >
        <Text style={styles.title}>This is the List View</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 200,
  },
  title: {
    fontSize: 42,
    margin: 40,
    fontWeight: '300',
  },
});
