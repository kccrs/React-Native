import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  ActivityIndicator,
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

import foundStationsContainer from '../containers/foundStationsContainer';

import Login from './Login';
import MapView from './MapView';
import Profile from './Profile';
import { NREL_API_KEY } from '../../Auth0-credentials';

class List extends Component {
  constructor (props) {
   super(props);
 }

  render() {
    return (
      <ScrollView>
        { this.props.stations.fuel_stations ?
          this.props.stations.fuel_stations.map(s => <Text style={styles.title} key={s.id}>{s.station_name}</Text>)
        :  <ActivityIndicator
            style={styles.centering}
            size="large"
          /> }
      </ScrollView>
    );
  }
}

export default foundStationsContainer(List)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 200,
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginTop: 100
  },
  title: {
    fontSize: 42,
    margin: 40,
    fontWeight: '300',
  },
});
