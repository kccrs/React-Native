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

  componentDidMount() {
  }

  componentWillUnmount() {
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
    margin: 20,
    fontWeight: '100',
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 75,
  }
});

export default userContainer(Profile)
