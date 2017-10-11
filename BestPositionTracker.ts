import {IPositionTracker} from "IPositionTracker";
import {ICoordinates} from "ICoordinates";

export default class BestPositionTracker implements IPositionTracker {
    private tracker : IPositionTracker;

    constructor(private trackers: IPositionTracker[]) {
        this.tracker = trackers.find(x => x.isApplicable());
    }

    isApplicable(): boolean {
        return true;
    }

    subscribe(onNewPosition: (coords: ICoordinates) => void): void {
        this.tracker.subscribe(x => onNewPosition(x));
    }
}