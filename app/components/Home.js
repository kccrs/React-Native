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
  TabBarIOS,
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
import Settings from './Settings';
import List from './List';
// import routes from './routes';

class Home extends Component{
  constructor (props) {
   super(props);
   this.state = {
     selectedTab: 'Settings'
   }
 }

 componentDidMount(){
   console.log(this.props, this.props.navigator)
 }

 render() {
   const { user } = this.props;
   if (user) {
     return (
           <TabBarIOS selectedTab={this.state.selectedTab}>
             <TabBarIOS.Item
               title={'Settings'}
               icon={require('./SettingsIcon.png')}
               selected={this.state.selectedTab === 'Settings'}
               onPress={() => {
                   this.setState({
                       selectedTab: 'Settings',
                   });
               }}>
                <Settings navigator={this.props.navigator}/>
             </TabBarIOS.Item>
             <TabBarIOS.Item
               title={'Profile'}
               icon={require('./ProfileIcon.png')}
               selected={this.state.selectedTab === 'Profile'}
               onPress={() => {
                   this.setState({
                       selectedTab: 'Profile',
                   });
               }}>
                 <Profile navigator={this.props.navigator}/>
             </TabBarIOS.Item>
             <TabBarIOS.Item
               title={'Map View'}
               icon={require('./MapIcon.png')}
               selected={this.state.selectedTab === 'MapView'}
               onPress={() => {
                     this.setState({
                         selectedTab: 'MapView',
                     });
               }}>
               <MapView/>
             </TabBarIOS.Item>
             <TabBarIOS.Item
               title={'List View'}
               icon={require('./ListIcon.png')}
               selected={this.state.selectedTab === 'List'}
               onPress={() => {
                   this.setState({
                       selectedTab: 'List',
                   });
               }}>
                <List/>
             </TabBarIOS.Item>
           </TabBarIOS>
     )
   }
  return (null)
 }
}

export default userContainer(Home)

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#fff',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingTop: 200,
//   },
//   title: {
//     fontSize: 42,
//     margin: 40,
//     fontWeight: '300',
//   },
// });
