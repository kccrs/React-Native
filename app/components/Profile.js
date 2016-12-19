import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Linking,
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  TouchableHighlight,
  Alert,
  TextInput,
  ScrollView,
  Switch,
  Animated
} from 'react-native'


import userContainer from '../containers/userContainer';
import Stats from './Stats';

class Profile extends Component{
  constructor (props) {
    super(props);
    this.state = {
      stateChoice: ''
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  _routeToStats() {
    this.props.navigator.push({
      component: Stats,
      title: 'State Stats',
    });
  }

  render() {
    const { user } = this.props;
    if (user) {
      return (
        <View style={styles.container}>
          <Text style={styles.name}>
            Welcome {user.name}!
          </Text>
          <Text style={styles.email}>
            {user.email}
          </Text>
          <Image style={styles.photo} source={{uri: user.picture}} />
          <Text style={styles.tagline}>What fuels your state?</Text>
          <View style={styles.border}>
            <Picker
              style={styles.picker}
              selectedValue={this.state.stateChoice}
              onValueChange={(choice) => this.setState({stateChoice: choice})}>
              <Picker.Item label="Alabama" value="alabama" />
              <Picker.Item label="Alaska" value="alaska" />
              <Picker.Item label="Arizona" value="arizona" />
              <Picker.Item label="Arkansas" value="arkansas" />
              <Picker.Item label="California" value="california" />
              <Picker.Item label="Colorado" value="colorado" />
              <Picker.Item label="Connecticut" value="connecticut" />
              <Picker.Item label="Delaware" value="delaware" />
              <Picker.Item label="Florida" value="florida" />
              <Picker.Item label="Georgia" value="georgia" />
              <Picker.Item label="Hawaii" value="hawaii" />
              <Picker.Item label="Idaho" value="idaho" />
              <Picker.Item label="Illinois" value="illinois" />
              <Picker.Item label="Indiana" value="indiana" />
              <Picker.Item label="Iowa" value="iowa" />
              <Picker.Item label="Kansas" value="kansas" />
              <Picker.Item label="Kentucky" value="kentucky" />
              <Picker.Item label="Louisiana" value="louisiana" />
              <Picker.Item label="Maine" value="maine" />
              <Picker.Item label="Maryland" value="maryland" />
              <Picker.Item label="Massachusetts" value="massachusetts" />
              <Picker.Item label="Michigan" value="michigan" />
              <Picker.Item label="Minnesota" value="minnesota" />
              <Picker.Item label="Mississippi" value="mississippi" />
              <Picker.Item label="Missouri" value="missouri" />
              <Picker.Item label="Montana" value="montana" />
              <Picker.Item label="Nebraska" value="nebraska" />
              <Picker.Item label="Nevada" value="nevada" />
              <Picker.Item label="New Hampshire" value="new-hampshire" />
              <Picker.Item label="New Jersey" value="new-jersey" />
              <Picker.Item label="New Mexico" value="new-mexico" />
              <Picker.Item label="New York" value="new-york" />
              <Picker.Item label="North Carolina" value="north-carolina" />
              <Picker.Item label="North Dakota" value="north-dakota" />
              <Picker.Item label="Ohio" value="ohio" />
              <Picker.Item label="Oklahoma" value="oklahoma" />
              <Picker.Item label="Oregon" value="oregon" />
              <Picker.Item label="Pennsylvania" value="pennsylvania" />
              <Picker.Item label="Rhode Island" value="rhode-island" />
              <Picker.Item label="South Carolina" value="south-carolina" />
              <Picker.Item label="South Dakota" value="south-dakota" />
              <Picker.Item label="Tennessee" value="tennessee" />
              <Picker.Item label="Texas" value="texas" />
              <Picker.Item label="Utah" value="utah" />
              <Picker.Item label="Vermont" value="vermont" />
              <Picker.Item label="Virginia" value="virginia" />
              <Picker.Item label="Washington" value="washington" />
              <Picker.Item label="West Virginia" value="west-virginia" />
              <Picker.Item label="Wisconsin" value="wisconsin" />
              <Picker.Item label="Wyoming" value="wyoming" />
            </Picker>
            <TouchableHighlight
              style={styles.stateButton}
              underlayColor='#757575'
              onPress={this._routeToStats.bind(this)}>
              <Text style={styles.stateButtonText}>Check here</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    }
    return (null)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  border: {
    borderColor: '#757575',
    borderStyle: 'solid',
    borderWidth: 1
  },
  name: {
    fontSize: 30,
    margin: 20,
    fontWeight: '300',
  },
  email: {
    fontSize: 18,
    margin: 10,
    fontWeight: '100',
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  tagline: {
    fontSize: 24,
    margin: 10
  },
  picker: {
    width: 300
  },
  stateButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#757575',
    margin: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateButtonText: {
    fontSize: 30,
    color: '#FFF'
  }
});

export default userContainer(Profile);
