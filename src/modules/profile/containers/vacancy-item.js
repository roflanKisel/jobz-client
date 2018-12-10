import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VacancyItem from '../components/vacancy-item/vacancy-item';
import { removeVacancy, getVacancies } from '../actions/profile';

const mapDispatchToProps = dispatch => ({
  // dispatchGetVacancies: bindActionCreators(getVacancies, dispatch),
  dispatchRemoveVacancy: bindActionCreators(removeVacancy, dispatch),
});

export default connect(null, mapDispatchToProps)(VacancyItem);
