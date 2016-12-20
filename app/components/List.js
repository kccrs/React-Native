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

const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
];

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
          this.props.stations.fuel_stations.map((s) => {
            return ( <View key={s.id} style={styles.listItem}>
              <Text style={styles.title}>{s.station_name}</Text>
              <Text>{s.station_phone}</Text>
              <Text>{s.access_days_time}</Text>
              <Text>{s.street_address}</Text>
              <Text>{s.intersection_directions}</Text>
            </View>
          );
        })
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
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5
  },
  button: {
    marginTop: 20
  },
  chart: {
    width: 200,
    height: 200,
  },
  listItem: {
    margin: 5,
    padding: 5,
    paddingBottom: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  button: {
    marginTop: 10
  }
});

export default foundStationsContainer(List);
