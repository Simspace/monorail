import {
  coerceApiActionTypeToString,
  mkApiAction,
  mkApiActionTypes,
} from '../apiActions'

describe('coerceApiActionTypeToString', () => {
  it('should not change the runtime value', () => {
    const type = mkApiActionTypes('GET_USERS').types.success
    const actual = coerceApiActionTypeToString(type)
    const expected = 'GET_USERS_SUCCESS'
    expect(actual).toBe(expected)
  })
})

describe('mkApiActionTypes', () => {
  const { guards, prisms, types } = mkApiActionTypes('GET_USERS')
  describe('types', () => {
    it('should contain the correct types', () => {
      expect(types.optimistic).toBe('GET_USERS_OPTIMISTIC')
      expect(types.request).toBe('GET_USERS_REQUEST')
      expect(types.success).toBe('GET_USERS_SUCCESS')
      expect(types.failure).toBe('GET_USERS_FAILURE')
    })
  })
  describe('guards', () => {
    it('should guard types correctly', () => {
      expect(guards.isOptimistic(types.optimistic)).toBe(true)
      expect(guards.isRequest(types.request)).toBe(true)
      expect(guards.isSuccess(types.success)).toBe(true)
      expect(guards.isFailure(types.failure)).toBe(true)
      expect(guards.isOptimistic(types.failure)).toBe(false)
      expect(guards.isRequest(types.failure)).toBe(false)
      expect(guards.isSuccess(types.failure)).toBe(false)
      expect(guards.isFailure(types.success)).toBe(false)
    })
  })
  describe('types', () => {
    it('should contain prisms that function correctly', () => {
      expect(prisms.optimistic.getOption('GET_USERS_OPTIMISTIC')).toBeSome()
      expect(prisms.request.getOption('GET_USERS_REQUEST')).toBeSome()
      expect(prisms.success.getOption('GET_USERS_SUCCESS')).toBeSome()
      expect(prisms.failure.getOption('GET_USERS_FAILURE')).toBeSome()
      expect(prisms.optimistic.getOption('invalid')).toBeNone()
      expect(prisms.request.getOption('invalid')).toBeNone()
      expect(prisms.success.getOption('invalid')).toBeNone()
      expect(prisms.failure.getOption('invalid')).toBeNone()
    })
  })
})

describe('mkApiAction', () => {
  const { types } = mkApiActionTypes('GET_USERS')
  it('should properly construct API actions', () => {
    const successAction = mkApiAction(types.success)
    expect(successAction.type).toBe('GET_USERS_SUCCESS')
    // tslint:disable-next-line no-any
    expect((successAction as any).payload).toBe(undefined)
    // tslint:disable-next-line no-any
    expect((successAction as any).meta).toBe(undefined)

    const failureAction = mkApiAction(types.failure, 0)
    expect(failureAction.type).toBe('GET_USERS_FAILURE')
    expect(failureAction.payload).toBe(0)
    // tslint:disable-next-line no-any
    expect((failureAction as any).meta).toBe(undefined)

    const requestAction = mkApiAction(types.request, 0, 'info')
    expect(requestAction.type).toBe('GET_USERS_REQUEST')
    expect(requestAction.payload).toBe(0)
    expect(requestAction.meta).toBe('info')
  })
})
