import {User} from './classes/User';
import {Company} from './classes/Company';
import {Map} from './classes/Map';

const user = new User();
const company = new Company();
const map = new Map('map');

map.addMarker({
    location: {
        lat: user.location.lat,
        lng: user.location.lng,
    },
    windowContent() {
        return `<h4>User Name:${user.name} </h4>`;
    },
});

map.addMarker({
    location: {
        lat: company.location.lat,
        lng: company.location.lng,
    },
    windowContent() {
        return `<h4>Company Name:${company.name}</h4><p>motto: ${company.catchPhrase}</p>`;
    },
});
