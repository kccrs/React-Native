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
import _ from 'lodash';

import fuelStatsContainer from '../containers/fuelStatsContainer';

class Stats extends Component{
  constructor (props) {
   super(props);
 }

  componentDidMount(){
    console.log(this.props)
  }

  componentDidUpdate(){
    console.log(this.props)
  }

  _routeBack() {
    this.props.navigator.pop();
  }

  transformData(){
    let obj = this.props.nationalCounts
    let arr = []
    for(let thing in obj){
      let subobj = obj[thing]
      let value = subobj['total'];
      arr.push(`${thing}: ${value}`);
    }
    return arr;
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
        { Array.isArray(this.props.nationalCounts) ?
            <Text>no data</Text>
            :  this.transformData().map(str => <Text>{str}</Text>)
          }

        <Text style={styles.chart}>
          National Chart goes here!
        </Text>
      </View>
    )
  }
}
//

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

export default fuelStatsContainer(Stats);
