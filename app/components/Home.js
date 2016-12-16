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
  Switch,
  Animated
} from 'react-native';

import userContainer from '../containers/userContainer';

class Profile extends Component{
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
       </View>
     )
   }
  return (null)
 }
}

export default userContainer(Profile)

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
