import faker from "faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.name = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude: parseFloat(faker.address.latitude()),
      longitude: parseFloat(faker.address.longitude()),
    };
  }

  markerContent() {
    return `
      <h2>Company name: ${this.name}</h2>
      <h3>Catch Phrase: ${this.catchPhrase}</h3>
      `;
  }
}
