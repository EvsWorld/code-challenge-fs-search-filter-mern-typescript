export interface ICompany {
  id: number;
  company_name: string;
  city: string;
  logo: string;
  specialties: string[];
}
export interface IFilter {
  specialties: string[];
  searchWord: string;
}
