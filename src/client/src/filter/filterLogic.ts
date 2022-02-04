export const filterBySpecialty = (filter, company) => {
  return filter.specialties.every((specialty) =>
    company.specialties.includes(specialty)
  );
};
export const filterBySearchWord = (filter, company) => {
  return company.company_name
    .toLowerCase()
    .includes(filter.searchWord.toLowerCase());
};

export const filterCompanies = (companies, filter) => {
  return companies
    .filter((company) => filterBySearchWord(filter, company))
    .filter((company) => filterBySpecialty(filter, company));
};
