import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  Button,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  View
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

  _routeBack() {
   this.props.navigator.pop();
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Button
            style={styles.button}
            onPress={this._routeBack.bind(this)}
            title="← Go Back"
          />
        </View>
        { this.props.stations.fuel_stations ?
          this.props.stations.fuel_stations.map(s => <Text style={styles.title} key={s.id}>{s.station_name}</Text>)
          : <ActivityIndicator
            style={styles.centering}
            size="large"
            />
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
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
  button: {
    marginTop: 20
  }
});

export default foundStationsContainer(List);
