import { connect } from 'react-redux';
import { actionCreators } from '../actions/userActions';

const mapStateToProps = (user) => {
  return { user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => {
       dispatch(actionCreators.getUser(user));
     }
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
