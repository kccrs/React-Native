import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Linking,
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
} from 'react-native'

import userContainer from '../containers/userContainer'

class Profile extends Component{
  constructor (props) {
   super(props)
   this.state = {
   }
 }

 render() {
   const { user } = this.props
   if(user) {
     return (
       <View style={styles.container}>
         <Text style={styles.title}>{user.name}</Text>
         <Text style={styles.info}>{user.email}</Text>
         <Image style={styles.avatar} source={{uri: user.picture}} />
       </View>
     )
   }
   return (null)
  }

  sendEmail = () => {
    const { user } = this.props
    if(user) {
      Linking.canOpenURL(user.email).then(supported => {
        if (supported) {
          Linking.openURL(user.email);
        } else {
          console.log('Don\'t know how to open URI: ' + user.email);
        }
      });
    }
  }
}

export default userContainer(Profile)
