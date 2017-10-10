import {IPositionTracker} from "IPositionTracker";
import GeoLocationPositionTracker from "GeoLocationPositionTracker";
import FakePositionTracker from "FakePositionTracker";
import {positions} from "Config";

class App {
    private googleMapsKey = 'AIzaSyDKqLjN02JGD3rcIXizXJnp2sLYILLorTo';

    constructor(private positionTracker: IPositionTracker,
                private map: HTMLIFrameElement) {
    }

    init(): void {
        this.positionTracker.subscribe(coords => {
            this.map.src = `https://www.google.com/maps/embed/v1/view?key=${this.googleMapsKey}&center=${coords.latitude},${coords.longitude}&zoom=18&maptype=`;
        });
    }
}

let positionTracker = new GeoLocationPositionTracker();
let fakePositionTracker = new FakePositionTracker(positions);

let map = document.querySelector("#map") as HTMLIFrameElement;

let app = new App(positionTracker, map);
app.init();