import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserData } from '../actions/app';
import App from '../components/app/app';

const mapDispatchToProps = dispatch => ({
  dispatchGetUserData: bindActionCreators(getUserData, dispatch),
});

export default connect(null, mapDispatchToProps)(App);
