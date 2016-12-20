import { connect } from 'react-redux';
import { actionCreators } from '../actions/searchActions';

const mapStateToProps = (state) => {
  return { nationalCounts: state.nationalCounts,
            stateCounts: state.stateCounts };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNationalStats: (data) => {
       dispatch(actionCreators.getNationalStats(data));
     },
   getStateStats: (data) => {
      dispatch(actionCreators.getStateStats(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
