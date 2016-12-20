import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TabBarIOS,
} from 'react-native';

import userContainer from '../containers/userContainer';
import Login from './Login';
import MapView from './MapView';
import Profile from './Profile';
import Settings from './Settings';
import List from './List';

class Home extends Component{
  constructor (props) {
   super(props);
   this.state = {
     selectedTab: 'Settings'
   };
 }

 render() {
   const { user } = this.props;
   if (user) {
     return (
       <TabBarIOS selectedTab={this.state.selectedTab}>
         <TabBarIOS.Item
           title={'Settings'}
           icon={require('../images/SettingsIcon.png')}
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
           icon={require('../images/ProfileIcon.png')}
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
           icon={require('../images/MapIcon.png')}
           selected={this.state.selectedTab === 'MapView'}
           onPress={() => {
             this.setState({
               selectedTab: 'MapView',
             });
           }}>
           <MapView />
         </TabBarIOS.Item>
         <TabBarIOS.Item
           title={'List View'}
           icon={require('../images/ListIcon.png')}
           selected={this.state.selectedTab === 'List'}
           onPress={() => {
             this.setState({
               selectedTab: 'List',
             });
           }}>
           <List />
         </TabBarIOS.Item>
       </TabBarIOS>
     )
   }
   return (null);
 }
}

export default userContainer(Home)
