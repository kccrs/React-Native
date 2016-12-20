import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import Auth0Lock from 'react-native-lock';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import userContainer from '../containers/userContainer';
import { Auth0creds } from '../../Auth0-credentials';
import Home from './Home';

var lock = new Auth0Lock(Auth0creds);

class Login extends Component {
  constructor (props) {
    super(props);
  }

  _onLogin() {
    const { getUser } = this.props;

    lock.show({
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      getUser(profile);
      this.props.navigator.push({
        component: Home,
        title: 'Home',
        token: token
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text style={styles.title}>Re:fuel</Text>
        </View>
        <View style={styles.messageBox}>
          <TouchableHighlight
            style={styles.signInButton}
            underlayColor='#757575'
            onPress={this._onLogin.bind(this)}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

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
    fontWeight: '300',
    textAlign: 'center',
  },
  signInButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#757575',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 28,
    color: '#FFF'
  }
});

export default userContainer(Login);
