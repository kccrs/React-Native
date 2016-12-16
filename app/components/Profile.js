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
import Stats from './Stats';

class Profile extends Component{
  constructor (props) {
   super(props);
   this.state = {

   };
 }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  _routeToStats() {
    this.props.navigator.push({
      component: Stats,
      title: 'State Stats',
    });
  }

 render() {
   const { user } = this.props;
   if (user) {
     return (
       <View style={styles.container}>
         <Text style={styles.name}>
          Welcome {user.name}!
         </Text>
         <Text style={styles.email}>
           {user.email}
         </Text>
         <Image style={styles.photo} source={{uri: user.picture}} />
         <Text style={styles.tagline}>What fuels your state?</Text>
         <TouchableHighlight
           style={styles.stateButton}
           underlayColor='#757575'
           onPress={this._routeToStats.bind(this)}>
          <Text style={styles.stateButtonText}>Check here</Text>
         </TouchableHighlight>
       </View>
     )
   }
  return (null)
 }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  name: {
    fontSize: 30,
    margin: 20,
    fontWeight: '300',
  },
  email: {
    fontSize: 18,
    margin: 25,
    fontWeight: '100',
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  tagline: {
    fontSize: 30,
    marginTop: 50
  },
  stateButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#757575',
    margin: 10,
    marginTop: 150,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateButtonText: {
    fontSize: 30,
    color: '#FFF'
  }
});

export default userContainer(Profile)
