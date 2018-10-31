import React from 'react';
import CreateVacancyForm from '../../containers/create-vacancy-form';

const Companies = ({ match }) => (
  <React.Fragment>
    {match.params.action === 'create' && <CreateVacancyForm />}
  </React.Fragment>
);

export default Companies;
