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
   this.state = {
     data: null
   }
 }

componentDidMount(){
  fetch('https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=EhCEXrfKfuNMgGH7Vn9Y2ggCbTeBhGB83xlLH8Xp&fuel_type=ELEC&zip=80204').then((response) => response.json()).then((responseJSON)=>{this.setState({data: responseJSON})});
}

  render() {
    return (
      <ScrollView>
        { this.state.data ?
        this.state.data.fuel_stations.map(s => <Text style={styles.title}>{s.station_name}</Text>) : <Text>loading...</Text>}
      </ScrollView>
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
