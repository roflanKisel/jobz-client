import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTitle } from '../../../actions/navbar';
import CreateCompanyForm from '../components/create-company-form/create-company-form';

const mapDispatchToProps = dispatch => ({
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
});

export default connect(null, mapDispatchToProps)(CreateCompanyForm);
