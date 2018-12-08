const formatCompaniesForCards = companies => companies.map(company => ({
  id: company.id,
  header: company.name,
  description: company.description,
  img: company.imageUrl || 'http://www.bizcardz.net/wp-content/uploads/2017/06/how-to-incorporate-a-private-company-in-singapore.jpg',
  link: `/companies/${company.id}`,
}));

const formatVacanciesForCards = vacancies => vacancies.map(vacancy => ({
  id: vacancy.id,
  header: `${vacancy.employeePosition} - ${vacancy.company.name}`,
  description: vacancy.description,
  img: vacancy.imageUrl || 'http://www.archer-soft.com/sites/default/files/Microsoft-dotNET-logo.jpg',
  link: `/vacancies/get/${vacancy.id}`,
}));

export default {
  formatCompaniesForCards,
  formatVacanciesForCards,
};
