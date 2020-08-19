import { Colors } from '@monorail/helpers/color'

export enum EventState {
  // Enrolled (Event status: 'inactive')
  Scheduled = 'scheduled',
  // Past reservationStart time, but waiting on backend to start event
  // (Event status: 'inactive')
  Starting = 'starting',
  // In Progress
  Active = 'active',
  // Canceled
  Canceled = 'canceled',
  // Complete
  Finished = 'finished',
  // Pending
  Requested = 'requested',
  // Survey
  Survey = 'survey',
  // Paused
  Paused = 'paused',
}

export const convertEventStateToColor = (eventState: EventState): Colors => {
  /* eslint-disable default-case */
  switch (eventState) {
    case EventState.Active:
      return Colors.Active
    case EventState.Paused:
      return Colors.Inactive
    case EventState.Finished:
      return Colors.Finished
    case EventState.Survey:
      return Colors.Finished
    // Scheduled and Starting are both 'inactive'
    case EventState.Scheduled:
    case EventState.Starting:
      return Colors.Scheduled
    case EventState.Requested:
      return Colors.Requested
    case EventState.Canceled:
      return Colors.Canceled
  }
  /* eslint-enable default-case */
}
