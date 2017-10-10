import {IPositionTracker} from "IPositionTracker";
import {ICoordinates} from "ICoordinates";

export default class FakePositionTracker implements IPositionTracker {
    private index = 0;

    constructor(private positions: ICoordinates[]) {

    }

    subscribe(onNewPosition: (coords: ICoordinates) => void): void {
        var self = this;

        function newPosition() {
            onNewPosition(self.positions[self.index % self.positions.length]);
            self.index += 1;
        }

        newPosition();
        window.setInterval(newPosition, 5000);
    }
}