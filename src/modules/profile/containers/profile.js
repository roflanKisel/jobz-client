import { connect } from 'react-redux';
import Profile from '../components/profile/profile';

const mapStateToProps = state => ({
  userData: state.user.userData,
});

export default connect(mapStateToProps)(Profile);
