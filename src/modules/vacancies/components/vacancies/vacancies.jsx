import React from 'react';
import PropTypes from 'prop-types';
import CreateVacancyForm from '../../containers/create-vacancy-form';
import VacancyPage from '../vacancy-page/vacancy-page';

const Companies = ({ match }) => (
  <React.Fragment>
    {match.params.action === 'create' && <CreateVacancyForm />}
    {match.params.action !== 'create' && <VacancyPage id={match.params.action} />}
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
