export declare type ADTMember<ADT, Key extends string, Type extends string> = Extract<ADT, {
    [k in Key]: Type;
}>;
declare type Matchers<Key extends string, ADT extends {
    [k in Key]: string;
}, Out> = {
    [D in ADT[Key]]: (v: ADTMember<ADT, Key, D>) => Out;
};
export declare const matchOn: <K extends string>(key: K) => <ADT extends { [k in K]: string; }, Z>(matchObj: Matchers<K, ADT, Z>) => (v: ADT) => Z;
export declare const matchOnI: <K extends string>(key: K) => <ADT extends { [k in K]: string; }>(v: ADT) => <Z>(matchObj: Matchers<K, ADT, Z>) => Z;
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
export declare const match: <ADT extends {
    tag: string;
}, Z>(matchObj: Matchers<"tag", ADT, Z>) => (v: ADT) => Z;
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
export declare const matchI: <ADT extends {
    tag: string;
}>(v: ADT) => <Z>(matchObj: Matchers<"tag", ADT, Z>) => Z;
export {};
//# sourceMappingURL=matchers.d.ts.map