import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Navigator,
  PickerIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

import userContainer from '../containers/userContainer';
import Login from './Login';
import List from './List';
import MapView from './MapView';
import Profile from './Profile';
var PickerItemIOS = PickerIOS.Item;

import { NREL_API_KEY } from '../../Auth0-credentials';
import foundStationsContainer from '../containers/foundStationsContainer';

class Settings extends Component {
  constructor (props) {
   super(props);
   this.state = {
     fuel: 'ELEC',
     includePrivate: false,
     zip: ''
   }
 }

 _routeToList(){
   this.props.navigator.push({
     component: List,
     title: 'ListView'
   });
 }

 _findStations(){
    fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=${NREL_API_KEY}&fuel_type=${this.state.fuel}&zip=${this.state.zip}`)
    .then(response => response.json())
    .then(responseJSON => this.props.getStations(responseJSON))
    .then(() => this._routeToList())
    .catch(error => console.error(error));
 }

  render() {
    return (
      <View >
        <Text style={styles.title}>Select Fuel Type</Text>
        <PickerIOS
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
        <Text style={styles.title}>Enter Zip</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          keyboardType={'numeric'}
          maxLength={5}
          placeholder={'enter zip'}
          returnKeyType={'done'}
          onChangeText={(text) => this.setState({zip: text})}
          value={this.state.zip.toString()}
        />
        <TouchableHighlight
          underlayColor='#757575'
          onPress={this._findStations.bind(this)}>
          <Text>Find stations!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    margin: 40,
    fontWeight: '300',
  },
});

export default foundStationsContainer(Settings)
