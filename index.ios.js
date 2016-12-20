console.ignoredYellowBox = ['Remote debugger is in a background tab', 'MapView is now deprecated'];

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Main from './app/containers/main';

AppRegistry.registerComponent('wastenot', () => Main);
