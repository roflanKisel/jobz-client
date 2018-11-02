import axios from 'axios';
import { API_URL } from '../../../constants/config';
import formatter from '../../../services/formatter';
import * as homeActions from '../constants/home-page';

const vacanciesData = [
  {
    header: '.NET Full Stack Developer',
    description:
      '.NET community! Currently we are looking for a .NET Full Stack Developer to reinforce our team in order to join a project stream for our customer dealing with Intellectual property domain.',
    img:
      'http://www.archer-soft.com/sites/default/files/Microsoft-dotNET-logo.jpg',
    link: 'https://www.epam.com/careers/job-listings/job.33981',
    id: 1,
  },
  {
    header: '.NET Full Stack Developer',
    description:
      '.NET community! Currently we are looking for a .NET Full Stack Developer to reinforce our team in order to join a project stream for our customer dealing with Intellectual property domain.',
    img:
      'http://www.archer-soft.com/sites/default/files/Microsoft-dotNET-logo.jpg',
    link: 'https://www.epam.com/careers/job-listings/job.33981',
    id: 2,
  },
  {
    header: '.NET Full Stack Developer',
    description:
      '.NET community! Currently we are looking for a .NET Full Stack Developer to reinforce our team in order to join a project stream for our customer dealing with Intellectual property domain.',
    img:
      'http://www.archer-soft.com/sites/default/files/Microsoft-dotNET-logo.jpg',
    link: 'https://www.epam.com/careers/job-listings/job.33981',
    id: 3,
  },
  {
    header: '.NET Full Stack Developer',
    description:
      '.NET community! Currently we are looking for a .NET Full Stack Developer to reinforce our team in order to join a project stream for our customer dealing with Intellectual property domain.',
    img:
      'http://www.archer-soft.com/sites/default/files/Microsoft-dotNET-logo.jpg',
    link: 'https://www.epam.com/careers/job-listings/job.33981',
    id: 4,
  },
];

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
