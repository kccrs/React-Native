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
   console.log(this.props.user);
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
    paddingTop: 200,
  },
  name: {
    fontSize: 42,
    margin: 40,
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

export default userContainer(Profile)
