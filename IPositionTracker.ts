import {ICoordinates} from "ICoordinates";

export interface IPositionTracker {
    subscribe(onNewPosition: (coords: ICoordinates) => void): void;
}