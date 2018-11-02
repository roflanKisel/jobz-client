import React from 'react';
import PropTypes from 'prop-types';
import CreateCompanyForm from '../../containers/create-company-form';

const Companies = ({ match }) => (
  <React.Fragment>
    {match.params.action === 'create' && <CreateCompanyForm />}
  </React.Fragment>
);

Companies.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Companies;
