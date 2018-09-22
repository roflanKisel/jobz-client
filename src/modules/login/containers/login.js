import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../components/login/login';
import { signIn, signOut } from '../actions/login';
import { setTitle } from '../../../actions/navbar';

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  isLoggedIn: state.user.isLoggedIn,
  userData: state.user.userData,
});

const mapDispatchToProps = dispatch => ({
  dispatchSignIn: bindActionCreators(signIn, dispatch),
  dispatchSignOut: bindActionCreators(signOut, dispatch),
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
