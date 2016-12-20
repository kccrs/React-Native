import React, { Component } from 'react';
import { connect } from 'react-redux';
import Immutable, { List } from 'immutable';
import { VictoryBar } from "victory-native";
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
import userContainer from '../containers/userContainer';

class Stats extends Component{
  constructor (props) {
   super(props);
   this.state = {
     nationalKey: null,
     nationalValue: null
   };
 }

  componentDidMount() {
    // console.log(this.props.nationalCounts);
  }


  _routeBack() {
    this.props.navigator.pop();
  }

//   pullInTheThing() {
//     let dataArray = this.props.nationalCounts.toArray();
//     console.log('DA - ' + dataArray);
//     return dataArray;
//   }
//
//   transformData(obj){
//     let arr = [];
//     for(let thing in obj){
//       let subobj = obj[thing];
//       let value = subobj['total'];
//       arr.push(`${thing}: ${value}`);
//     }
//     console.log(arr);
//     return arr;
//   }
//
//   renderChartData() {
//     console.log('props ' + this.props.nationalCounts);
//     let chartData = this.transformData(this.props.nationalCounts).toString();
//     var properties = chartData.split(',');
//     // var obj = {};
//     var anotherThing = [];
//     properties.forEach(function(property) {
//       var tup = property.split(': ');
//       anotherThing.push(tup);
//       // obj[tup[0]] = parseInt(tup[1]);
//       console.log(anotherThing);
//       // this.setState({ nationalKey: 0, nationalValue: 1 });
//       return anotherThing;
//       // return obj;
// });
//     console.log('outside properties ' + properties);
//     console.log('outside AT ' + anotherThing);
//     console.log('outside props ' + this.props.nationalCounts);
//     // if (this.props.nationalCounts) {
//     //   let stuffyThings = JSON.parse(chartData, (key, value) => {
//     //     console.log(key);
//     //     console.log(value);
//     //     return value;
//     //   });
//     //   console.log(stuffyThings);
//
//     // }
//   //   const data = [
//   //   {fuel: 1, total: 13000},
//   //   {fuel: 2, total: 16500},
//   //   {fuel: 3, total: 14250},
//   //   {fuel: 4, total: 19000}
//   // ];
//   }

  render() {
    console.log(this.props.nationalCounts); // returns Object
    var natData = Immutable.fromJS(this.props.nationalCounts);
    console.log(natData); // returns Map
    var newArrayData = natData.toArray();
    console.log(newArrayData);
    var dataObject = natData.toObject();
    console.log(dataObject); 

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          onPress={this._routeBack.bind(this)}
          title="← Go Back"
        />
        <Text style={styles.chart}>
          National Chart goes here!
        </Text>
          <Text style={styles.text}>{"Victory Tutorial"}</Text>
          <VictoryBar
            style={{
              data: {fill: "blue"}
            }}
          />
        <Text style={styles.chart}>
          State Chart goes here!
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
});

export default userContainer(fuelStatsContainer(Stats));

// { Array.isArray(this.props.stateCounts) ?
//   <View>
//     <Text>Loading data...</Text>
//     <ActivityIndicator
//       style={styles.centering}
//       size="large"
//       />
//   </View>
//     :  this.transformData(this.props.stateCounts).map(str => <Text key={Math.random()}>{str}</Text>)
//   }

// { Array.isArray(this.props.nationalCounts) ?
//     <View>
//       <Text>Loading data...</Text>
//       <ActivityIndicator
//         style={styles.centering}
//         size="large"
//         />
//     </View>
//     :  this.transformData(this.props.nationalCounts).map(str => <Text key={Math.random()}>{str}</Text>)
//   }
