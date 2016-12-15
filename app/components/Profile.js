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

class Profile extends Component{
  constructor (props) {
   super(props);
   this.state = {
   };
 }

 render() {
   const { user } = this.props;

    return (
      <View>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Image source={{uri: user.picture}} />
      </View>
    )
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
