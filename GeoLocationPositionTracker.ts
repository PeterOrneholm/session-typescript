import {IPositionTracker} from "IPositionTracker";
import {ICoordinates} from "ICoordinates";

export default class GeoLocationPositionTracker implements IPositionTracker {
    constructor(private enableHighAccuracy: boolean = true) {

    }

    subscribe(onNewPosition: (coords: ICoordinates) => void): void {
        const options = {
            enableHighAccuracy: this.enableHighAccuracy,
            maximumAge: 15000
        };
        navigator.geolocation.watchPosition((position) => {
            onNewPosition({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, null, options);
    }
}