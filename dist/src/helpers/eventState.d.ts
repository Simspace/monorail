import { Colors } from '@monorail/helpers/color';
export declare enum EventState {
    Scheduled = "scheduled",
    Starting = "starting",
    Active = "active",
    Canceled = "canceled",
    Finished = "finished",
    Requested = "requested",
    Survey = "survey",
    Paused = "paused"
}
export declare const convertEventStateToColor: (eventState: EventState) => Colors;
