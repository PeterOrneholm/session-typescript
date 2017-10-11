import {IPositionTracker} from "IPositionTracker";
import {ICoordinates} from "ICoordinates";

export default class IpLocationPositionTracker implements IPositionTracker {
    isApplicable(): boolean {
        return 'fetch' in window;
    }

    async subscribe(onNewPosition: (coords: ICoordinates) => void) {
        let response = await fetch('http://ip-api.com/json');
        let data = await response.json();

        onNewPosition({
            latitude: data.lat,
            longitude: data.lon
        });
    }
}