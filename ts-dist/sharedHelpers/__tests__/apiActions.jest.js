import { coerceApiActionTypeToString, mkApiActionTypes, mkApiAction, } from '../apiActions';
describe('coerceApiActionTypeToString', () => {
    it('should not change the runtime value', () => {
        const type = mkApiActionTypes('GET_USERS').types.success;
        const actual = coerceApiActionTypeToString(type);
        const expected = 'GET_USERS_SUCCESS';
        expect(actual).toBe(expected);
    });
});
describe('mkApiActionTypes', () => {
    const { guards, prisms, types } = mkApiActionTypes('GET_USERS');
    describe('types', () => {
        it('should contain the correct types', () => {
            expect(types.optimistic).toBe('GET_USERS_OPTIMISTIC');
            expect(types.request).toBe('GET_USERS_REQUEST');
            expect(types.success).toBe('GET_USERS_SUCCESS');
            expect(types.failure).toBe('GET_USERS_FAILURE');
        });
    });
    describe('guards', () => {
        it('should guard types correctly', () => {
            expect(guards.isOptimistic(types.optimistic)).toBe(true);
            expect(guards.isRequest(types.request)).toBe(true);
            expect(guards.isSuccess(types.success)).toBe(true);
            expect(guards.isFailure(types.failure)).toBe(true);
            expect(guards.isOptimistic(types.failure)).toBe(false);
            expect(guards.isRequest(types.failure)).toBe(false);
            expect(guards.isSuccess(types.failure)).toBe(false);
            expect(guards.isFailure(types.success)).toBe(false);
        });
    });
    describe('types', () => {
        it('should contain prisms that function correctly', () => {
            expect(prisms.optimistic.getOption('GET_USERS_OPTIMISTIC').isSome()).toBe(true);
            expect(prisms.request.getOption('GET_USERS_REQUEST').isSome()).toBe(true);
            expect(prisms.success.getOption('GET_USERS_SUCCESS').isSome()).toBe(true);
            expect(prisms.failure.getOption('GET_USERS_FAILURE').isSome()).toBe(true);
            expect(prisms.optimistic.getOption('invalid').isSome()).toBe(false);
            expect(prisms.request.getOption('invalid').isSome()).toBe(false);
            expect(prisms.success.getOption('invalid').isSome()).toBe(false);
            expect(prisms.failure.getOption('invalid').isSome()).toBe(false);
        });
    });
});
describe('mkApiAction', () => {
    const { types } = mkApiActionTypes('GET_USERS');
    it('should properly construct API actions', () => {
        const successAction = mkApiAction(types.success);
        expect(successAction.type).toBe('GET_USERS_SUCCESS');
        // tslint:disable-next-line no-any
        expect(successAction.payload).toBe(undefined);
        // tslint:disable-next-line no-any
        expect(successAction.meta).toBe(undefined);
        const failureAction = mkApiAction(types.failure, 0);
        expect(failureAction.type).toBe('GET_USERS_FAILURE');
        expect(failureAction.payload).toBe(0);
        // tslint:disable-next-line no-any
        expect(failureAction.meta).toBe(undefined);
        const requestAction = mkApiAction(types.request, 0, 'info');
        expect(requestAction.type).toBe('GET_USERS_REQUEST');
        expect(requestAction.payload).toBe(0);
        expect(requestAction.meta).toBe('info');
    });
});
//# sourceMappingURL=apiActions.jest.js.map