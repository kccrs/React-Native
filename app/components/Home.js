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

import userContainer from '../containers/userContainer';
//
import Login from './Login';
import MapView from './MapView';
import Profile from './Profile';
// import routes from './routes';

class Home extends Component{
  constructor (props) {
   super(props);
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
          // onPress={() => this.props.navigator.jumpTo(routes[3])}
          title='Go to Profile'
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
