import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from '../components/profile/profile';
import { setTitle } from '../../../actions/navbar';
import { getCompanies, getVacancies } from '../actions/profile';

const mapStateToProps = state => ({
  userData: state.user.userData,
  companies: state.profile.companies,
  vacancies: state.profile.vacancies,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
  dispatchGetCompanies: bindActionCreators(getCompanies, dispatch),
  dispatchGetVacancies: bindActionCreators(getVacancies, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
