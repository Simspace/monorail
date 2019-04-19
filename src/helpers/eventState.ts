import { Colors } from '@monorail/helpers/color'

export enum EventState {
  // In Progress
  Active = 'active',
  // Canceled
  Canceled = 'canceled',
  // Complete
  Finished = 'finished',
  // Enrolled
  Scheduled = 'scheduled',
  // Pending
  Requested = 'requested',
  // Paused
  Inactive = 'inactive',
}

export const convertEventStateToColor = (eventState: EventState): Colors => {
  switch (eventState) {
    case EventState.Active:
      return Colors.Active
    case EventState.Inactive:
      return Colors.Inactive
    case EventState.Finished:
      return Colors.Finished
    case EventState.Scheduled:
      return Colors.Scheduled
    case EventState.Requested:
      return Colors.Requested
    case EventState.Canceled:
      return Colors.Canceled
  }
}
