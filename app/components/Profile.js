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
   };
 }

 render() {
   const { user } = this.props;
   if (user) {
     return (
       <View>
         <Text style={styles.title}>Hello!  This is the profile page!</Text>
       </View>
     )
   }
  return (null)
 }

sendEmail = () => {
  const { user } = this.this.props
  if (user) {
    Linking.canOpenURL(user.email).then(supported => {
      if (supported) {
        Linking.openURL(user.email);
      } else {
        console.log('Don\'t know how to open URI: ' + user.email);
      }
    })
  }
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
    margin: 20,
    fontWeight: '300',
  },
  info: {
    fontSize: 18,
    margin: 20,
    fontWeight: '100',
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 75,
  }
});
