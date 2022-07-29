import { pet } from "./pet";

export interface Relatorio {
  id: number;
  email: string;
  value: string;
  pets: pet;
}