import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTitle } from '../../../actions/navbar';
import { createCompany, clearState } from '../actions/companies';
import CreateCompanyForm from '../components/create-company-form/create-company-form';

const mapStateToProps = state => ({
  isLoading: state.companies.isLoading,
  isFailure: state.companies.isFailure,
  company: state.companies.company,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
  dispatchCreateCompany: bindActionCreators(createCompany, dispatch),
  dispatchClearState: bindActionCreators(clearState, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateCompanyForm);
