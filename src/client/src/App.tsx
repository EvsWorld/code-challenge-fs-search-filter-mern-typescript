import React, { useEffect, useState, useMemo } from "react";
import styled from "styled-components";
import { api } from "./axiosConfig";

import { Company } from "./Company";
import { IFilter, ICompany } from "./types";
import { filterCompanies } from "./filter/filterLogic";
import { CheckboxList } from "./CheckboxList";

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const CompaniesContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 0 auto;
  background: #c2edf2;
`;
const Header = styled.div`
  background-color: #e2dfdf;
  height: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Page = styled.div`
  display: flex;
  width: 100%;
`;

export function App() {
  const [filter, setFilter] = useState<IFilter>({
    specialties: [],
    searchWord: "",
  });
  const [initialCompanies, setInitialCompanies] = useState<ICompany[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // strip out all specialties to display checkbox options
  const allSpecialties = useMemo(() => {
    const specialtiesAccum: string[] = [];
    initialCompanies.forEach((company) => {
      company.specialties.forEach((specialty) => {
        if (!specialtiesAccum.includes(specialty)) {
          specialtiesAccum.push(specialty);
        }
      });
    });
    return specialtiesAccum;
  }, [initialCompanies]);

  const getCompanies = async () => {
    try {
      const response = await api.get("/api/company");
      if (response.data) {
        setInitialCompanies(response.data);
      }
      setIsLoading(false);
    } catch (ex) {
      setIsLoading(false);
      console.error(ex);
    }
  };

  useEffect(() => {
    getCompanies();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({ ...prev, searchWord: event.target.value }));
  };

  const isReady = !isLoading && allSpecialties && allSpecialties.length > 0;
  const filteredCompanies = useMemo(() => {
    return filterCompanies(filter, initialCompanies);
  }, [filter, initialCompanies]);

  return (
    <>
      {isReady ? (
        <>
          <Header>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleSearch}
            />
          </Header>
          <Page>
            <CheckboxList
              onChange={setFilter}
              filter={filter}
              specialties={allSpecialties}
            />
            <CompaniesContainer>
              {filteredCompanies.map((company) => (
                <Company {...company} key={company.id} />
              ))}
            </CompaniesContainer>
          </Page>
        </>
      ) : (
        <Loader> Loading...</Loader>
      )}
    </>
  );
}
