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
  TabBarIOS,
  Navigator,
  ScrollView,
  Switch,
  Animated,
  Button,
  PickerIOS
} from 'react-native';

import userContainer from '../containers/userContainer';
//
import Login from './Login';
import MapView from './MapView';
import Profile from './Profile';
var PickerItemIOS = PickerIOS.Item;


export default class Settings extends Component {
  constructor (props) {
   super(props);
   this.state = {
     fuel: 'ELEC',
     includePrivate: false
   }
 }

  render() {
    return (
      <View >
        <Text style={styles.title}>Select Fuel Type</Text>
        <PickerIOS
          style={styles.picker}
          selectedValue={this.state.fuel}
          onValueChange={(choice) => this.setState({fuel: choice})}>
          <PickerItemIOS
            label='Electricity'
            value="ELEC"
          />
          <PickerItemIOS
            label='Biodiesel'
            value="BD"
          />
          <PickerItemIOS
            label='Hydrogen'
            value="HY"
          />
          <PickerItemIOS
            label='E85'
            value="E85"
          />
          <PickerItemIOS
            label='Compressed Natural Gas'
            value="CNG"
          />
          <PickerItemIOS
            label='Liquid Natural Gas'
            value="LNG"
          />
          <PickerItemIOS
            label='Liquid Propane Gas'
            value="LPG"
          />
        </PickerIOS>
        {this.state.fuel==='ELEC' ?
          <View>
          <Switch
            onValueChange={(value) => this.setState({includePrivate: !this.state.includePrivate})}
            style={{marginBottom: 10}}
            value={this.state.includePrivate} />
          </View> : null}
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
