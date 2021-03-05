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
            lat: parseFloat(faker.address.latitude(35, 30, 4)),
            lng: parseFloat(faker.address.longitude(120, 110, 4)),
        };
    }
}
