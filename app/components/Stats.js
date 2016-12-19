import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  Button,
  Navigator,
  TextInput,
  ScrollView,
  Switch,
  Animated
} from 'react-native';

import userContainer from '../containers/userContainer';


class Stats extends Component{
  constructor (props) {
   super(props);
   this.state = {

   };
 }

  _routeBack() {
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={styles.container}>
        <Button
          onPress={this._routeBack.bind(this)}
          title="← Go Back"
          / >
        <Text style={styles.chart}>
          State Chart goes here!
        </Text>
        <Text style={styles.chart}>
          National Chart goes here!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50
  },
  chart: {
    fontSize: 30,
    marginTop: 50,
    height: 200,
  },
});

export default userContainer(Stats);
