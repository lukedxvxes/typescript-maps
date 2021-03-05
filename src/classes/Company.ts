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
            lat: parseFloat(faker.address.latitude(35, 30, 4)),
            lng: parseFloat(faker.address.longitude(120, 110, 4)),
        };
    }
}
