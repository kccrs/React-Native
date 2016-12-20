import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  MapView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import userContainer from '../containers/userContainer';
import foundStationsContainer from '../containers/foundStationsContainer';

class Maps extends Component {
  constructor (props) {
    super(props);
    this.state = {
      initialPosition: {},
      lastPosition: null,
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position;
        this.setState({initialPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 40000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = position;
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    const { user } = this.props;
    const annotes = this.props.stations.fuel_stations ? this.props.stations.fuel_stations.map((s) => {
      return {latitude: s.latitude,
        longitude: s.longitude,
        animateDrop: true}
      }) : null;
      if (user) {
        return (
          <View>
            <Text style={styles.title}>
              Stations near you:
            </Text>
            { this.state.initialPosition.coords ?
              <MapView
                annotations={annotes}
                showsUserLocation={true}
                style={{height: 600, margin: 0}}
                region={{
                  latitude: parseFloat(this.state.lastPosition.coords.latitude),
                  longitude: parseFloat(this.state.lastPosition.coords.longitude),
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
                />
              : <ActivityIndicator
              style={styles.centering}
              size="large"
              />
          }
        </View>
      )
    }
    return (null)
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    margin: 15,
    fontWeight: '300',
  },
});

export default userContainer(foundStationsContainer(Maps));
