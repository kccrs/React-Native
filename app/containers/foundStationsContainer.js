import { connect } from 'react-redux';
import { actionCreators } from '../actions/searchActions';

const mapStateToProps = (state) => {
  return { stations: state.stations };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getStations: (data) => {
       dispatch(actionCreators.getStations(data));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
