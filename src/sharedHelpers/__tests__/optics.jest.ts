import { Lens } from 'monocle-ts'
import {
  lensesFromRecord,
  mkRecordKeyOptional,
  mkArrayIndexOptional,
  oLens,
} from '../optics'

interface TestAddress {
  street: string
  city: string
  postalCode: number
}

interface TestInterface {
  firstName: string
  lastName: string
  age: number
  address: TestAddress
}

const testInterface: TestInterface = {
  firstName: 'John',
  lastName: 'Smith',
  age: 33,
  address: {
    street: '123 Lensy ST',
    city: 'Opticland',
    postalCode: 12345,
  },
}

const testRecord: Record<string, number> = {
  '81d9e19a-b936-4715-86c9-43266d0fc2b6': 0,
  'a67d7ccb-1a5f-4a8b-9d8e-324e98ec853b': 1,
  '43be4d69-4169-4f30-a6c2-8dd497a0472a': 2,
}

const testArray: Array<string> = ['a', 'b', 'c', 'd']

describe('lensesFromRecord', () => {
  it('should create a record containing lenses for all top level keys', () => {
    const lenses = lensesFromRecord(testInterface)
    const mkLens = Lens.fromProp<TestInterface>()
    const expected = {
      firstName: mkLens('firstName'),
      lastName: mkLens('lastName'),
      age: mkLens('age'),
      address: mkLens('address'),
    }
    expect(JSON.stringify(lenses)).toEqual(JSON.stringify(expected))

    expect(lenses.address.get(testInterface)).toEqual({
      street: '123 Lensy ST',
      city: 'Opticland',
      postalCode: 12345,
    })

    expect(lenses.age.get(testInterface)).toBe(33)

    expect(lenses.firstName.set('Johnathan')(testInterface).firstName).toBe(
      'Johnathan',
    )
  })
})

describe('mkRecordKeyOptional', () => {
  it('should create a properly functioning Optional for a given key', () => {
    const testStr: string = '43be4d69-4169-4f30-a6c2-8dd497a0472a'
    const testOptional = mkRecordKeyOptional<typeof testRecord, string>(testStr)
    const opt = testOptional.getOption(testRecord)
    const actual = opt.isSome() && opt.value === 2
    const expected = true
    expect(actual).toEqual(expected)
  })
})

describe('mkArrayIndexOptional', () => {
  it('should create a properly functioning Optional for a given key', () => {
    const testOptional = mkArrayIndexOptional(2)
    const opt = testOptional.getOption(testArray)
    const actual = opt.isSome() && opt.value === 'c'
    const expected = true
    expect(actual).toBe(expected)
  })
})

describe('oLens', () => {
  it('should compose two lenses together', () => {
    const testToAddressLens = Lens.fromProp<TestInterface>()('address')
    const addressToStreetLens = Lens.fromProp<TestAddress>()('street')
    const testToStreetLens = oLens(testToAddressLens, addressToStreetLens)
    const actual = testToStreetLens.get(testInterface)
    const expected = '123 Lensy ST'
    expect(actual).toBe(expected)
  })
})
