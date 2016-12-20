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
let Item = PickerIOS.Item;

import { NREL_API_KEY } from '../../Auth0-credentials';
import foundStationsContainer from '../containers/foundStationsContainer';

class Settings extends Component {
  constructor (props) {
    super(props);
    this.state = {
      fuel: 'ELEC',
      includePrivate: false,
      zip: ''
    };
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
      <View style={styles.container}>
        <Text style={styles.title}>Select Fuel Type</Text>
        <PickerIOS
          style={styles.picker}
          selectedValue={this.state.fuel}
          onValueChange={(choice) => this.setState({fuel: choice})}>
          <Item
            label='Electricity'
            value="ELEC"
            />
          <Item
            label='Biodiesel'
            value="BD"
            />
          <Item
            label='Hydrogen'
            value="HY"
            />
          <Item
            label='E85'
            value="E85"
            />
          <Item
            label='Compressed Natural Gas'
            value="CNG"
            />
          <Item
            label='Liquid Natural Gas'
            value="LNG"
            />
          <Item
            label='Liquid Propane Gas'
            value="LPG"
            />
        </PickerIOS>
        <Text style={[styles.title, styles.zip]}>Enter Zip Code</Text>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          maxLength={5}
          placeholder={'Enter 5 digit zip code'}
          returnKeyType={'done'}
          onChangeText={(text) => this.setState({zip: text})}
          value={this.state.zip.toString()}
          />
        <TouchableHighlight
          style={styles.button}
          underlayColor='#757575'
          onPress={this._findStations.bind(this)}>
          <Text style={styles.buttonText}>Find stations</Text>
        </TouchableHighlight>
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
    paddingTop: 50
  },
  picker: {
    borderTopColor: '#757575',
    borderTopWidth: 1,
    borderBottomColor: '#757575',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: 350
  },
  title: {
    fontSize: 32,
    margin: 30,
    fontWeight: '300',
  },
  zip: {
    fontSize: 24
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    paddingLeft: 20,
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center'
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#757575',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 28,
    color: '#FFF'
  }
});

export default foundStationsContainer(Settings);
