import {
  HOME_COMPANIES_DATA_REQUEST,
  HOME_COMPANIES_DATA_SUCCESS,
  HOME_COMPANIES_DATA_FAILURE,
  HOME_VACANCIES_DATA_REQUEST,
  HOME_VACANCIES_DATA_SUCCESS,
  HOME_VACANCIES_DATA_FAILURE,
} from '../constants/home-page';
import { NAVBAR_TITLE_SET } from '../../../constants/navbar';

const companiesData = [
  {
    header: 'EPAM',
    description:
      'We can help your business transform. Our multi-disciplinary teams combine business expertise with design thinking, world-class engineering, modern operations practices and knowledge of leading tools and frameworks to optimize performance.',
    img: 'https://careers.epam.by/etc/designs/epam-core/images/common/logo.png',
    link: 'https://www.epam.com',
    id: 1,
  },
  {
    header: 'EPAM',
    description:
      'We can help your business transform. Our multi-disciplinary teams combine business expertise with design thinking, world-class engineering, modern operations practices and knowledge of leading tools and frameworks to optimize performance.',
    img: 'https://careers.epam.by/etc/designs/epam-core/images/common/logo.png',
    link: 'https://www.epam.com',
    id: 2,
  },
  {
    header: 'EPAM',
    description:
      'We can help your business transform. Our multi-disciplinary teams combine business expertise with design thinking, world-class engineering, modern operations practices and knowledge of leading tools and frameworks to optimize performance.',
    img: 'https://careers.epam.by/etc/designs/epam-core/images/common/logo.png',
    link: 'https://www.epam.com',
    id: 3,
  },
  {
    header: 'EPAM',
    description:
      'We can help your business transform. Our multi-disciplinary teams combine business expertise with design thinking, world-class engineering, modern operations practices and knowledge of leading tools and frameworks to optimize performance.',
    img: 'https://careers.epam.by/etc/designs/epam-core/images/common/logo.png',
    link: 'https://www.epam.com',
    id: 4,
  },
];

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
    type: HOME_COMPANIES_DATA_REQUEST,
  });

  setTimeout(() => {
    dispatch({ type: HOME_COMPANIES_DATA_SUCCESS, payload: companiesData });
  }, 2000);
};

const getFeaturedVacancies = () => dispatch => {
  dispatch({
    type: HOME_VACANCIES_DATA_REQUEST,
  });

  setTimeout(() => {
    dispatch({
      type: HOME_VACANCIES_DATA_SUCCESS,
      payload: vacanciesData,
    });
  }, 2000);
};

export { getFeaturedCompanies, getFeaturedVacancies };
