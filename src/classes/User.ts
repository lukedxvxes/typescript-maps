import faker from 'faker';

export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName(1);
        this.location = {
            lat: parseFloat(faker.address.latitude(-31.1, -31.99, 4)),
            lng: parseFloat(faker.address.longitude(115.8, 115.7, 4)),
        };
    }
}
