import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from '../components/profile/profile';
import { setTitle } from '../../../actions/navbar';

const mapStateToProps = state => ({
  userData: state.user.userData,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);