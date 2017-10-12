import {ICoordinates} from "./ICoordinates";

export interface IPositionTracker {
    isApplicable() : boolean;
    subscribe(onNewPosition: (coords: ICoordinates) => void): void;
}