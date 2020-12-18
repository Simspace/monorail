"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchS = exports.matchI = exports.match = exports.matchOnI = exports.matchOn = void 0;

const matchOn = key => matchObj => v => matchObj[v[key]](v);

exports.matchOn = matchOn;

const matchOnI = key => v => matchObj => matchObj[v[key]](v);
/**
 * Pattern matcher for matching over tagged unions whose discriminant value is "tag"
 * @example 
 * ```ts
 * export type TicketDetail =
  | {
      tag: 'tracking'
    }
  | {
      tag: 'info'
      contents: TicketInfoRequest
    }
  | {
      tag: 'change'
      contents: TicketChangeRequest
    }

    declare const detail: TicketDetail 
    pipe(detail, 
        match({
            tracking: () => "I'm super tracked!", 
            info: i => i.contents.status,
            change: c => c.contents.justification
    }))
 * ```
 */


exports.matchOnI = matchOnI;
const match = matchOn('tag');
/**
 * Like {@link match} but inverted argument order
 * @example 
 * ```ts
 * export type TicketDetail =
  | {
      tag: 'tracking'
    }
  | {
      tag: 'info'
      contents: TicketInfoRequest
    }
  | {
      tag: 'change'
      contents: TicketChangeRequest
    }

    declare const detail: TicketDetail 
    matchI(detail)({
        tracking: () => "I'm super tracked!", 
        info: i => i.contents.status,
        change: c => c.contents.justification
    })
 * ```
 */

exports.match = match;
const matchI = matchOnI('tag');
exports.matchI = matchI;

const matchS = s => matchObj => matchObj[s]();

exports.matchS = matchS;