import axios from "axios";

export interface Person {
  name: string;
  height?: string;
  mass?: string;
}

export const fetchPerson = async (count: number) => {
  const { data } = await axios.get<Person>(
    `https://swapi.info/api/people/${count}`,
  );
  return data;
};
