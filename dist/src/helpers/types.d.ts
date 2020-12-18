/**
 * These utility types exist for the use case of testing const array of strings against their upstream props. This is
 * used instead of expect-type for the cases where we want to have the compiler check in the app files themselves and
 * avoid pulling in the runtime test library to our app.
 *
 * Source of Equals<X, Y>: https://github.com/microsoft/TypeScript/issues/27024#issuecomment-509504856
 * Source of this code: https://simspace.slack.com/archives/CBBTM0WJX/p1601931440050700?thread_ts=1601930575.046600&cid=CBBTM0WJX
 */
export declare type Equals<A, B> = Exclude<A, B> extends never ? Exclude<B, A> extends never ? true : false : false;
export declare type Assert<T extends true> = T;
