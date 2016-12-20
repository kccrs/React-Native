import React, { Component } from 'react';
import { connect } from 'react-redux';
import { VictoryBar } from "victory-native";
import _ from 'lodash';
import {
  Button,
  Navigator,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

import fuelStatsContainer from '../containers/fuelStatsContainer';

class Stats extends Component{
  constructor (props) {
   super(props);
 }

  componentDidMount() {
    console.log(this.props.nationalCounts);
  }
  _routeBack() {
    this.props.navigator.pop();
  }

  transformData(){
    let obj = this.props.nationalCounts;
    let arr = [];
    for(let thing in obj){
      let subobj = obj[thing];
      let value = subobj['total'];
      arr.push(`${thing}: ${value}`);
    }
    return arr;
  }

  render() {
    return(
      <ScrollView>
        <Button
          onPress={this._routeBack.bind(this)}
          title="← Go Back"
        />
        <Text style={styles.chart}>
          State Chart goes here!
        </Text>
        { Array.isArray(this.props.nationalCounts) ?
            <Text>no data</Text>
            :  this.transformData().map(str => <Text>{str}</Text>)
          }
          <Text style={styles.text}>{"Victory Tutorial"}</Text>
          <VictoryBar
            style={{
              data: {fill: "blue"}
            }}

          />
      </ScrollView>
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

export default fuelStatsContainer(Stats);
