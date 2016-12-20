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
  ScrollView,
  MapView,
  Switch,
  Animated
} from 'react-native';

// import MapView from 'react-native-maps';

import userContainer from '../containers/userContainer';

class Maps extends Component{
  constructor (props) {
   super(props);
   this.state = {
     initialPosition: 'unknown',
     lastPosition: 'unknown',
   };
 }

 componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      var initialPosition = JSON.stringify(position);
      this.setState({initialPosition});
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
  this.watchID = navigator.geolocation.watchPosition((position) => {
    var lastPosition = JSON.stringify(position);
    this.setState({lastPosition});
  });
}

componentWillUnmount() {
  navigator.geolocation.clearWatch(this.watchID);
}

 render() {
   const { user } = this.props;
   if (user) {
     return (
       <View>
         <Text style={styles.title}>
          Hello!  Your location is: {this.state.lastPosition}
         </Text>
         <MapView
            style={{height: 200, margin: 40}}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          />
       </View>
     )
   }
  return (null)
 }
}

export default userContainer(Maps)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
