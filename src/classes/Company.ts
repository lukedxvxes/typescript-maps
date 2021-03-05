import faker from 'faker';

export class Company {
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
}
