import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Alert,
  TextInput,
  Navigator,
  ScrollView,
  Switch,
  Animated,
  Button
} from 'react-native';
import MapView from './MapView';

import userContainer from '../containers/userContainer';

const routes = [
  // { component: Profile, title: 'Profile' },
  { component: MapView, title: 'MapView' }
];

class Home extends Component{
  constructor (props) {
   super(props);
 }

 navigatorRenderScene(route, navigator) {
   switch ('MapView') {
    //  case 'Profile':
    //   return (<Profile navigator={navigator} title='profile' />);
     case 'MapView':
      return (<MapView navigator={navigator} title='mapview' />);
   }
 }

 render() {
   const { user } = this.props;
   if (user) {
     return (
       <View>
         <Text style={styles.title}>
          This is the Home scene. Hi {this.props.user.name}
         </Text>
         <Button
          color='blue'
          onPress={this.navigatorRenderScene.bind(this)}
          title='Go to Map'
          />
       </View>
     )
   }
  return (null)
 }
}

export default userContainer(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 200,
  },
  title: {
    fontSize: 42,
    margin: 40,
    fontWeight: '300',
  },
});
