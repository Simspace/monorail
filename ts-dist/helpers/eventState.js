import { Colors } from '@monorail/helpers/color';
export var EventState;
(function (EventState) {
    // In Progress
    EventState["Active"] = "active";
    // Canceled
    EventState["Canceled"] = "canceled";
    // Complete
    EventState["Finished"] = "finished";
    // Enrolled
    EventState["Scheduled"] = "scheduled";
    // Pending
    EventState["Requested"] = "requested";
    // Paused
    EventState["Inactive"] = "inactive";
})(EventState || (EventState = {}));
export const convertEventStateToColor = (eventState) => {
    switch (eventState) {
        case EventState.Active:
            return Colors.Active;
        case EventState.Inactive:
            return Colors.Inactive;
        case EventState.Finished:
            return Colors.Finished;
        case EventState.Scheduled:
            return Colors.Scheduled;
        case EventState.Requested:
            return Colors.Requested;
        case EventState.Canceled:
            return Colors.Canceled;
    }
};
//# sourceMappingURL=eventState.js.map