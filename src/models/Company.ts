import { name, company, address } from 'faker';
import { Mappable } from "../interfaces/Mappable";

export class Company implements Mappable {
  name: string;
  cathcPhrase: string;
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.name = name.firstName();
    this.cathcPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude())
    }
  }

  markerContent(): string {
    return `Company Name: ${this.name} - ${this.cathcPhrase}`;
  }
}
