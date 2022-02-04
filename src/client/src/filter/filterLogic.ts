import { IFilter, ICompany } from "../types";

export const filterBySpecialty = (filter: IFilter, company: ICompany) => {
  return filter.specialties.every((specialty) =>
    company.specialties.includes(specialty)
  );
};
export const filterBySearchWord = (filter: IFilter, company: ICompany) => {
  return company.company_name
    .toLowerCase()
    .includes(filter.searchWord.toLowerCase());
};

export const filterCompanies = (filter: IFilter, companies: ICompany[]) => {
  return companies
    .filter((company) => filterBySearchWord(filter, company))
    .filter((company) => filterBySpecialty(filter, company));
};
