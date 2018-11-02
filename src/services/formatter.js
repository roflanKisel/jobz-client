const formatCompaniesForCards = companies => companies.map(company => ({
  id: company.id,
  header: company.name,
  description: company.description,
  img: company.imageUrl || 'http://www.bizcardz.net/wp-content/uploads/2017/06/how-to-incorporate-a-private-company-in-singapore.jpg',
  link: `/companies/${company.id}`,
}));

export default {
  formatCompaniesForCards,
};
