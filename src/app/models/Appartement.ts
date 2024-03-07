import { Residence } from
    "./Résidence";
export class Apartment {
  id!: number;
  appartNum!: number;
  floorNum!: number;
  surface!: number;
  terrace!: string;
  surfaceTerrace!: number;
  category!: string;
  description!: string;
  residence!: Residence;
}
