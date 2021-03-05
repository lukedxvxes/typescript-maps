import faker from 'faker';
import {MarkerObj} from './Map';

export class Company implements MarkerObj {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();

        this.location = {
            lat: parseFloat(faker.address.latitude(-31.1, -31.99, 4)),
            lng: parseFloat(faker.address.longitude(115.8, 115.7, 4)),
        };
    }

    windowContent(): string {
        return `<h4>Company Name:${this.name}</h4><p>motto: ${this.catchPhrase}</p>`;
    }
}
