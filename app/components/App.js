import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
} from 'react-native';

import Login from './Login';
import Home from './Home';
import MapView from './MapView';
import Profile from './Profile';

const routes = [
  { component: Login, title: 'Login' },
  { component: Home, title: 'Home' },
  { component: MapView, title: 'Map' },
  { component: Profile, title: 'Profile' }
];

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Navigator style={styles.navigator}
        initialRoute={routes[0]}
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

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});
