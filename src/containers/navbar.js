import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signOut } from '../actions/navbar';
import Navbar from '../components/navbar/navbar';

const mapStateToProps = state => ({
  userData: state.user.userData,
  isLoggedIn: state.user.isLoggedIn,
  title: state.navbar.title,
});

const mapDispatchToProps = dispatch => ({
  dipatchSignOut: bindActionCreators(signOut, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
