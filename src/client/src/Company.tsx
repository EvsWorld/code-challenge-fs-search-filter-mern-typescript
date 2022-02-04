import React from "react";
import styled from "styled-components";
import { ICompany } from "./types";

interface IStyles {
  alt: string;
  iconImage: string;
}

const Card = styled.div`
  display: flex;
  background: #fff;
  width: 1000px;
  border-radius: 0.6em;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
`;

const CardBody = styled.div`
  padding: 0.5em;
`;
const LabelInline = styled.div``;
const Info = styled.div`
  margin: 0;
  padding: 0;
`;
const Image = styled.div<IStyles>`
  display: flex;
  justify-content: flex-end;
  background: url(${(props) => props.iconImage});
  min-width: 12em;
`;

const Name = styled.h4`
  color: #222;
  margin-top: 0.8em;
  margin-bottom: 0.2em;
  font-family: "Montserrat", sans-serif;
`;
const City = styled.h4``;

export function Company({
  specialties,
  city,
  company_name,
  logo,
  id,
}: ICompany) {
  return (
    <>
      <Card>
        <Image iconImage={logo} alt="company"></Image>
        <CardBody>
          <LabelInline>
            <Name>Name:</Name>
            <Info> {company_name}</Info>
          </LabelInline>
          <LabelInline>
            <Name>City:</Name>
            <Info> {city}</Info>
          </LabelInline>
          <LabelInline>
            <Name>Specialties:</Name>
            <Info> {specialties.join(", ")}</Info>
          </LabelInline>
        </CardBody>
      </Card>
    </>
  );
}
