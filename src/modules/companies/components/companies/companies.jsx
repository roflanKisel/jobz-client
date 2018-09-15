import React from 'react';
import CreateCompanyForm from '../create-company-form/create-company-form';

const Companies = ({ match }) => (
  <React.Fragment>
    {match.params.action === 'create' && <CreateCompanyForm />}
  </React.Fragment>
);

export default Companies;
