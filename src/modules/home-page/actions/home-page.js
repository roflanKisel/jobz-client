import axios from 'axios';
import { API_URL } from '../../../constants/config';
import formatter from '../../../services/formatter';
import * as homeActions from '../constants/home-page';

const getFeaturedCompanies = () => dispatch => {
  dispatch({
    type: homeActions.HOME_COMPANIES_DATA_REQUEST,
  });

  axios
    .get(`${API_URL}/api/companies`)
    .then((res) => {
      dispatch({
        type: homeActions.HOME_COMPANIES_DATA_SUCCESS,
        payload: formatter.formatCompaniesForCards(res.data),
      });
    })
    .catch(() => {
      dispatch({
        type: homeActions.HOME_COMPANIES_DATA_FAILURE,
      });
    });
};

const getFeaturedVacancies = () => dispatch => {
  dispatch({
    type: homeActions.HOME_VACANCIES_DATA_REQUEST,
  });

  axios
    .get(`${API_URL}/api/vacancies`)
    .then((res) => {
      dispatch({
        type: homeActions.HOME_VACANCIES_DATA_SUCCESS,
        payload: formatter.formatVacanciesForCards(res.data),
      });
    })
    .catch(() => {
      dispatch({
        type: homeActions.HOME_VACANCIES_DATA_FAILURE,
      });
    });
};

export { getFeaturedCompanies, getFeaturedVacancies };
