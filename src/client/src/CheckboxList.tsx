import styled from "styled-components";
import { Checkbox } from "./Checkbox";
import { IFilter } from "./types";

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 325px;
  background: #c2d8f2;
  padding: 10px;
  font-size: 11px;
`;

export function CheckboxList({
  onChange,
  filter,
  specialties,
}: {
  onChange: (filter: IFilter) => void;
  filter: IFilter;
  specialties: string[];
}) {
  const handleCheckbox = (specialty: string) => {
    const checked = filter.specialties.includes(specialty);
    onChange({
      ...filter,
      specialties: checked
        ? filter.specialties.filter((sc) => sc !== specialty)
        : [...filter.specialties, specialty],
    });
  };
  return (
    <Sidebar>
      {specialties.map((specialty) => (
        <Checkbox
          checked={filter.specialties.includes(specialty)}
          onChange={() => handleCheckbox(specialty)}
          specialty={specialty}
        />
      ))}
    </Sidebar>
  );
}
