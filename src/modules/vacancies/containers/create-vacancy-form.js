import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTitle } from '../../../actions/navbar';
import CreateVacancyForm from '../components/create-vacancy-form/create-vacancy-form';

const mapDispatchToProps = dispatch => ({
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
});

export default connect(null, mapDispatchToProps)(CreateVacancyForm);
