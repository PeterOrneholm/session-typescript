import {IPositionTracker} from "IPositionTracker";
import GeoLocationPositionTracker from "GeoLocationPositionTracker";
import IpLocationPositionTracker from "IpLocationPositionTracker";
import FakePositionTracker from "FakePositionTracker";
import BestPositionTracker from "BestPositionTracker";

class App {
    private googleMapsKey = 'AIzaSyDKqLjN02JGD3rcIXizXJnp2sLYILLorTo';

    constructor(private positionTracker: IPositionTracker,
                private map: HTMLIFrameElement) {
    }

    init(): void {
        this.positionTracker.subscribe(coords => {
            this.map.src = `https://www.google.com/maps/embed/v1/view?key=${this.googleMapsKey}&center=${coords.latitude},${coords.longitude}&zoom=18&maptype=satellite`;
        });
    }
}

let positionTracker = new BestPositionTracker([
    new GeoLocationPositionTracker(),
    new IpLocationPositionTracker(),
    new FakePositionTracker([
        { latitude: 59.334634199999996, longitude: 18.060526 },
        { latitude: 47.642521, longitude: -122.136651 },
        { latitude: 63.431410, longitude: 13.093536 },
        { latitude: 59.329323, longitude: 18.068581 }
    ])
]);
let map = document.querySelector("#map") as HTMLIFrameElement;
let app = new App(positionTracker, map);

app.init();