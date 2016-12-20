import React, { Component } from 'react';
import { connect } from 'react-redux';
import Immutable, { List } from 'immutable';
import { VictoryBar } from "victory-native";
import {
  Button,
  Navigator,
  StyleSheet,
  Text,
  ScrollView,
  View,
  ActivityIndicator
} from 'react-native';

import { VictoryPie } from 'victory-native';

import fuelStatsContainer from '../containers/fuelStatsContainer';
import userContainer from '../containers/userContainer';

class Stats extends Component {
  constructor (props) {
    super(props);
    this.state = {
      pieData: []
    };
  }

  _routeBack() {
    this.props.navigator.pop();
  }

  transformData(obj){
    let arr = [];
    for(let thing in obj){
      let subobj = obj[thing];
      let value = subobj['total'];
      arr.push({fueltype: thing, count: value});
    }
    return arr;
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          style={styles.button}
          onPress={this._routeBack.bind(this)}
          title="← Go Back"
          />
        <Text style={styles.chart}>
          National distribution of alternative fuels:
        </Text>
        { Array.isArray(this.props.stateCounts) ?
          <View>
            <Text>Loading chart...</Text>
            <ActivityIndicator
              style={styles.centering}
              size="large"
              />
          </View>
          :  <VictoryPie
          colorScale='green'
          data={this.transformData(this.props.nationalCounts)}
          x="fueltype"
          y="count"
          /> }
          <Text style={styles.list}>
            Fuel Types:
            BD:	Biodiesel (B20 and above)
            CNG: Compressed Natural Gas
            E85:	Ethanol (E85)
            ELEC:	Electric
            HY:	Hydrogen
            LNG:	Liquefied Natural Gas
            LPG:	Liquefied Petroleum Gas (Propane)
          </Text>
          <Text style={styles.chart}>
            Your state&apos;s distribution of alternative fuels:
          </Text>
          { Array.isArray(this.props.stateCounts) ?
            <View>
              <Text>Loading charts...</Text>
              <ActivityIndicator
                style={styles.centering}
                size="large"
                />
            </View>
            :  <VictoryPie
            colorScale='green'
            data={this.transformData(this.props.stateCounts)}
            x="fueltype"
            y="count"
            /> }
            <Text style={styles.list}>
              Fuel Types:
              BD:	Biodiesel (B20 and above)
              CNG: Compressed Natural Gas
              E85:	Ethanol (E85)
              ELEC:	Electric
              HY:	Hydrogen
              LNG:	Liquefied Natural Gas
              LPG:	Liquefied Petroleum Gas (Propane)
            </Text>
          </ScrollView>
        )
      }
    }

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  chart: {
    fontSize: 30,
  },
  button: {
    marginTop: 20
  }
});

export default userContainer(fuelStatsContainer(Stats));
