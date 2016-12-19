import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

import Login from './Login';
import Home from './Home';
import MapView from './MapView';
import Profile from './Profile';

const routes = [
  { component: Login, title: 'Login'},
  { component: Home, title: 'Home' },
  { component: MapView, title: 'Map' },
  { component: Profile, title: 'Profile' }
];


var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight onPress={() => navigator.pop()}>
          <Text style={styles.prevButton}>Back</Text>
        </TouchableHighlight>
      )
    }
    else { return null }
  },

  RightButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight onPress={() => navigator.push(routes[index + 1])}>
          <Text style={styles.nextButton}>Next</Text>
        </TouchableHighlight>
      )
    }
    else { return null }
  },

  Title(route, navigator, index, navState) {
    return <Text style={ styles.navTitle }>Re:fuel</Text>
  }
};


export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Navigator style={styles.navigator}
        initialRoute={routes[1]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          let RouteComponent = route.component;
          return (
            <RouteComponent navigator={navigator} />
          )
        }}
      />
    )
  }
}


//
// var NavigationBarRouteMapper = {
//   LeftButton(route, navigator, index, navState) {
//     if(index > 0) {
//       return (
//         <TouchableHighlight onPress={() => navigator.pop()}>
//           <Text style={styles.prevButton}>{ routes[index - 1] ? `< Back to ${routes[index - 1].title}` : '< prev' }</Text>
//         </TouchableHighlight>
//       )
//     }
//     else { return null }
//   },
//
//   RightButton(route, navigator, index, navState) {
//     if(index > 0) {
//       return (
//         <TouchableHighlight onPress={() => navigator.push(routes[index + 1])}>
//           <Text style={styles.nextButton}>{ routes[index + 1] ? `Go to ${routes[index + 1].title} >` : 'next >' }</Text>
//         </TouchableHighlight>
//       )
//     }
//     else { return null }
//   },
//
//   Title(route, navigator, index, navState) {
//     return <Text style={ styles.navTitle }>{route.title}</Text>
//   }
// };
//
const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  navTitle: {
    marginTop:4,
    fontSize:16,
  },
  prevButton: {
   	fontSize: 16,
    marginLeft:15,
    marginTop:2,
  },
  nextButton: {
    fontSize: 16,
    marginRight:15,
    marginTop:2,
  },
  nav: {
    height: 50,
    backgroundColor: '#1E77E2',
  }
});
