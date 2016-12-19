import Login from './Login';
import Home from './Home';
import MapView from './MapView';
import Profile from './Profile';

const routes = [
  { component: Login, title: 'Login'},
  { component: Home, title: 'Home' },
  { component: MapView, title: 'Map' },
  { component: Profile, title: 'Profile' }
]

module.exports = routes;
