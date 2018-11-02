import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTitle } from '../../../actions/navbar';
import CreateVacancyForm from '../components/create-vacancy-form/create-vacancy-form';
import { createVacancy, clearState, getCompanies } from '../actions/vacancies';

const mapStateToProps = state => ({
  isLoading: state.vacancies.isLoading,
  isFailure: state.vacancies.isFailure,
  vacancy: state.vacancies.vacancy,
  companies: state.vacancies.companies,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
  dispatchCreateVacancy: bindActionCreators(createVacancy, dispatch),
  dispatchClearState: bindActionCreators(clearState, dispatch),
  dispatchGetCompanies: bindActionCreators(getCompanies, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateVacancyForm);
