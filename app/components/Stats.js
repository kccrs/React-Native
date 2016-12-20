import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  Button,
  Navigator,
  StyleSheet,
  Text,
  ScrollView,
  View,
  ActivityIndicator
} from 'react-native';

import fuelStatsContainer from '../containers/fuelStatsContainer';

class Stats extends Component{
  constructor (props) {
   super(props);
 }

  _routeBack() {
    this.props.navigator.pop();
  }

  transformData(obj){
    let arr = []
    for(let thing in obj){
      let subobj = obj[thing];
      let value = subobj['total'];
      arr.push(`${thing}: ${value}`);
    }
    return arr;
  }

  render() {
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          onPress={this._routeBack.bind(this)}
          title="← Go Back"
        />
        <Text style={styles.chart}>
          National Chart goes here!
        </Text>
        { Array.isArray(this.props.nationalCounts) ?
            <View>
              <Text>Loading data...</Text>
              <ActivityIndicator
                style={styles.centering}
                size="large"
                />
            </View>
            :  this.transformData(this.props.nationalCounts).map(str => <Text key={Math.random()}>{str}</Text>)
          }
        <Text style={styles.chart}>
          State Chart goes here!
        </Text>
        { Array.isArray(this.props.stateCounts) ?
          <View>
            <Text>Loading data...</Text>
            <ActivityIndicator
              style={styles.centering}
              size="large"
              />
          </View>
            :  this.transformData(this.props.stateCounts).map(str => <Text key={Math.random()}>{str}</Text>)
          }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
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
