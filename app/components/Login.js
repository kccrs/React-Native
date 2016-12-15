import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import Auth0Lock from 'react-native-lock';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';


import userContainer from '../containers/userContainer';
import { Auth0creds } from '../../Auth0-credentials';
import Profile from './Profile';

var lock = new Auth0Lock(Auth0creds);

class Login extends Component{
  constructor (props) {
   super(props);
 }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>Refuel</Text>
        </View>
        <TouchableHighlight
          style={styles.signInButton}
          underlayColor='#949494'
          onPress={this._onLogin.bind(this)}>
          <Text>Log In</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _onLogin() {
    const { getUser } = this.props;

    lock.show({
      }, (err, profile, token) => {
        if (err) {
          console.log(err);
          return;
        }
        getUser(profile)
        this.props.navigator.push({
          component: Profile,
          title: 'Your Profile',
          token: token
        })
    })
  }
}

export default userContainer(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  messageBox: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: '100',
    textAlign: 'center',
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#D9DADF',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
