import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import VacancyPage from '../components/vacancy-page/vacancy-page';
import {setTitle} from '../../../actions/navbar';
import {getVacancy, addFavoriteVacancy} from '../actions/vacancies';

const mapStateToProps = state => ({
  vacancy: state.vacancies.vacancy,
  isLoading: state.vacancies.isLoading,
  isFailure: state.vacancies.isFailure,
});

const mapDispatchToProps = dispatch => ({
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
  dispatchGetVacancy: bindActionCreators(getVacancy, dispatch),
  dispatchAddFavoriteVacancy: bindActionCreators(addFavoriteVacancy, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(VacancyPage);
