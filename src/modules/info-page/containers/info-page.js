import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTitle } from '../../../actions/navbar';
import InfoPage from '../components/info-page/info-page';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchSetTitle: bindActionCreators(setTitle, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoPage);
