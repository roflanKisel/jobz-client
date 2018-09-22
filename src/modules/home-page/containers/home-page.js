import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFeaturedCompanies, getFeaturedVacancies } from '../actions/home-page';
import { setTitle } from '../../../actions/navbar';
import HomePage from '../components/home-page/home-page';

const mapStateToProps = state => ({
  companies: state.home.companies,
  vacancies: state.home.vacancies,
  isLoading: state.home.isCompaniesLoading && state.home.isVacanciesLoading,
});

const mapDispatchToProps = dispatch => ({
  dispatchGetCompanies: bindActionCreators(getFeaturedCompanies, dispatch),
  dispatchGetVacancies: bindActionCreators(getFeaturedVacancies, dispatch),
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
