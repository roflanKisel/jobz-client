import React from 'react';
import PropTypes from 'prop-types';
import CreateVacancyForm from '../../containers/create-vacancy-form';

const Companies = ({ match }) => (
  <React.Fragment>
    {match.params.action === 'create' && <CreateVacancyForm />}
  </React.Fragment>
);

Companies.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      action: PropTypes.string
    })
  }).isRequired,
};

export default Companies;
