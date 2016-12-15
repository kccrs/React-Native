mport React, { Component } from 'react';
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
