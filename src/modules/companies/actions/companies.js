import axios from 'axios';
import { API_URL } from '../../../constants/config';
import * as actions from '../constants/companies';

const createCompany = (companyData) => (dispatch, getState) => {
  dispatch({ type: actions.COMPANIES_CREATE_REQUEST });

  const requestCompanyData = {
    name: companyData.companyName,
    address: companyData.address,
    phone: companyData.phoneNumber,
    description: companyData.description,
    userId: getState().user.userData.id,
  };

  axios.post(`${API_URL}/api/companies`, requestCompanyData)
    .then(res => {
      dispatch({
        type: actions.COMPANIES_CREATE_SUCCESS,
        payload: res.data,
      });
    })
    .catch(() => {
      dispatch({ type: actions.COMPANIES_CREATE_FAILURE });
    });
};

const clearState = () => dispatch => {
  dispatch({ type: actions.COMPANIES_CREATE_CLEAR });
};

export {
  createCompany,
  clearState,
};
