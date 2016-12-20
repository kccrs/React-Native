import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Image,
  Navigator,
  Picker,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import { NREL_API_KEY } from '../../Auth0-credentials';
import userContainer from '../containers/userContainer';
import fuelStatsContainer from '../containers/fuelStatsContainer';
import Stats from './Stats';

class Profile extends Component{
  constructor (props) {
    super(props);
    this.state = {
      stateChoice: ''
    };
  }

  _getNationalStats(){
    fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=${NREL_API_KEY}`)
    .then(response => response.json())
    .then(responseJSON => this.props.getNationalStats(responseJSON.station_counts.fuels));
  }

  _getStationStats(){
    this._getNationalStats();
    this._getStateStats();
    this._routeToStats();
  }

  _getStateStats(){
    fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1.json?api_key=${NREL_API_KEY}&state=${this.state.stateChoice}`)
    .then(response => response.json())
    .then(responseJSON => this.props.getStateStats(responseJSON.station_counts.fuels));
  }

  _routeToStats(){
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
          <View>
            <Picker
              style={styles.picker}
              selectedValue={this.state.stateChoice}
              onValueChange={(choice) => this.setState({stateChoice: choice})}>
              <Picker.Item label="Alabama" value="AL" />
              <Picker.Item label="Alaska" value="AK" />
              <Picker.Item label="Arizona" value="AZ" />
              <Picker.Item label="Arkansas" value="AR" />
              <Picker.Item label="California" value="CA" />
              <Picker.Item label="Colorado" value="CO" />
              <Picker.Item label="Connecticut" value="CT" />
              <Picker.Item label="Delaware" value="DE" />
              <Picker.Item label="Florida" value="FL" />
              <Picker.Item label="Georgia" value="GA" />
              <Picker.Item label="Hawaii" value="HI" />
              <Picker.Item label="Idaho" value="ID" />
              <Picker.Item label="Illinois" value="IL" />
              <Picker.Item label="Indiana" value="IN" />
              <Picker.Item label="Iowa" value="IA" />
              <Picker.Item label="Kansas" value="KS" />
              <Picker.Item label="Kentucky" value="KY" />
              <Picker.Item label="Louisiana" value="LA" />
              <Picker.Item label="Maine" value="ME" />
              <Picker.Item label="Maryland" value="MD" />
              <Picker.Item label="Massachusetts" value="MA" />
              <Picker.Item label="Michigan" value="MI" />
              <Picker.Item label="Minnesota" value="MN" />
              <Picker.Item label="Mississippi" value="MS" />
              <Picker.Item label="Missouri" value="MO" />
              <Picker.Item label="Montana" value="MT" />
              <Picker.Item label="Nebraska" value="NE" />
              <Picker.Item label="Nevada" value="NV" />
              <Picker.Item label="New Hampshire" value="NH" />
              <Picker.Item label="New Jersey" value="NJ" />
              <Picker.Item label="New Mexico" value="NM" />
              <Picker.Item label="New York" value="NY" />
              <Picker.Item label="North Carolina" value="NC" />
              <Picker.Item label="North Dakota" value="ND" />
              <Picker.Item label="Ohio" value="OH" />
              <Picker.Item label="Oklahoma" value="OK" />
              <Picker.Item label="Oregon" value="OR" />
              <Picker.Item label="Pennsylvania" value="PA" />
              <Picker.Item label="Rhode Island" value="RI" />
              <Picker.Item label="South Carolina" value="SC" />
              <Picker.Item label="South Dakota" value="SD" />
              <Picker.Item label="Tennessee" value="TN" />
              <Picker.Item label="Texas" value="TX" />
              <Picker.Item label="Utah" value="UT" />
              <Picker.Item label="Vermont" value="VT" />
              <Picker.Item label="Virginia" value="VA" />
              <Picker.Item label="Washington" value="WA" />
              <Picker.Item label="West Virginia" value="WV" />
              <Picker.Item label="Wisconsin" value="WI" />
              <Picker.Item label="Wyoming" value="WY" />
            </Picker>
            <TouchableHighlight
              style={styles.stateButton}
              underlayColor='#757575'
              onPress={this._getStationStats.bind(this)}>
              <Text style={styles.stateButtonText}>Check here</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    }
    return (null);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  name: {
    fontSize: 30,
    margin: 20,
    fontWeight: '300',
  },
  email: {
    fontSize: 18,
    marginBottom: 10,
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
    borderTopColor: '#757575',
    borderTopWidth: 1,
    borderBottomColor: '#757575',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    width: 350
  },
  stateButton: {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: '#757575',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateButtonText: {
    fontSize: 28,
    color: '#FFF'
  }
});

export default userContainer(fuelStatsContainer(Profile));
                
