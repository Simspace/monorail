"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertEventStateToColor = exports.EventState = void 0;

var _color = require("./color");

let EventState;
exports.EventState = EventState;

(function (EventState) {
  EventState["Active"] = "active";
  EventState["Canceled"] = "canceled";
  EventState["Finished"] = "finished";
  EventState["Scheduled"] = "scheduled";
  EventState["Requested"] = "requested";
  EventState["Inactive"] = "inactive";
})(EventState || (exports.EventState = EventState = {}));

const convertEventStateToColor = eventState => {
  switch (eventState) {
    case EventState.Active:
      return _color.Colors.Active;

    case EventState.Inactive:
      return _color.Colors.Inactive;

    case EventState.Finished:
      return _color.Colors.Finished;

    case EventState.Scheduled:
      return _color.Colors.Scheduled;

    case EventState.Requested:
      return _color.Colors.Requested;

    case EventState.Canceled:
      return _color.Colors.Canceled;
  }
};

exports.convertEventStateToColor = convertEventStateToColor;