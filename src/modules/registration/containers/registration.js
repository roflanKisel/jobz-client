import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Registration from '../components/registration/registration';
import { registrationRequest } from '../actions/registration';
import { setTitle } from '../../../actions/navbar';

const mapStateToProps = state => ({
  isLoading: state.registration.isLoading,
  isSuccess: state.registration.isSuccess,
});

const mapDispatchToProps = dispatch => ({
  dispatchRegistrationRequest: bindActionCreators(registrationRequest, dispatch),
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
