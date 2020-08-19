"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertEventStateToColor = exports.EventState = void 0;

var _color = require("./color");

let EventState;
exports.EventState = EventState;

(function (EventState) {
  EventState["Scheduled"] = "scheduled";
  EventState["Starting"] = "starting";
  EventState["Active"] = "active";
  EventState["Canceled"] = "canceled";
  EventState["Finished"] = "finished";
  EventState["Requested"] = "requested";
  EventState["Survey"] = "survey";
  EventState["Paused"] = "paused";
})(EventState || (exports.EventState = EventState = {}));

const convertEventStateToColor = eventState => {
  /* eslint-disable default-case */
  switch (eventState) {
    case EventState.Active:
      return _color.Colors.Active;

    case EventState.Paused:
      return _color.Colors.Inactive;

    case EventState.Finished:
      return _color.Colors.Finished;

    case EventState.Survey:
      return _color.Colors.Finished;
    // Scheduled and Starting are both 'inactive'

    case EventState.Scheduled:
    case EventState.Starting:
      return _color.Colors.Scheduled;

    case EventState.Requested:
      return _color.Colors.Requested;

    case EventState.Canceled:
      return _color.Colors.Canceled;
  }
  /* eslint-enable default-case */

};

exports.convertEventStateToColor = convertEventStateToColor;