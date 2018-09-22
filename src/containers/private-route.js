import { connect } from 'react-redux';
import PrivateRoute from '../components/private-route/private-route';

const mapStateToProps = state => ({
  isAuthenticate: state.user.isLoggedIn,
});

export default connect(mapStateToProps)(PrivateRoute);
