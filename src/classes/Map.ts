export interface MarkerObj {
    location: {
        lat: number;
        lng: number;
    };
    windowContent(): string;
}

export class Map {
    private googleMap: google.maps.Map;

    public mapContainer: Element;
    public mapOptions: {
        zoom: number;
        center: {lat: number; lng: number};
        draggable: boolean;
        streetViewControl: boolean;
    };

    constructor(id: string, zoom?: number) {
        this.mapContainer = document.getElementById(id);
        this.mapOptions = {
            zoom: zoom || 7,
            center: {lat: -31.9523, lng: 115.8613},
            draggable: true,
            streetViewControl: true,
        };

        this.googleMap = new google.maps.Map(this.mapContainer, this.mapOptions);
    }

    public addMarker(markerObj: MarkerObj): void {
        let lat = markerObj.location.lat;
        let lng = markerObj.location.lng;

        const marker = new google.maps.Marker({
            position: {lat, lng},
            map: this.googleMap,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: markerObj.windowContent(),
        });

        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        });
    }
}
