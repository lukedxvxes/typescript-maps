export class Map {
    private googleMap: google.maps.Map;
    private googleMarkers: google.maps.Marker[];

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

    public addMarker(lat: number, lng: number) {
        this.googleMarkers = [];
        this.googleMarkers.push(
            new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                title: 'new marker',
            })
        );

        this.googleMarkers.forEach(marker => {
            marker.setMap(this.googleMap);
        });
    }
}
