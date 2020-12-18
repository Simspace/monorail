import { getCollectionColor } from '@monorail/helpers/color'

describe('color helpers', () => {
  it('getCollectionColor should return the correct color', () => {
    expect(getCollectionColor(2)).toEqual('collectionSecondary3')
  })

  it('getCollectionColor should default to a color if provided an invalid index', () => {
    expect(getCollectionColor(0)).toEqual('collectionSecondary1')
  })

  it('getCollectionColor should default to a color if provided an invalid index', () => {
    expect(getCollectionColor(-1)).toEqual('CollectionPrimary1')
  })

  it('getCollectionColor should not break if index is above modulus', () => {
    expect(getCollectionColor(37)).toEqual('collectionSecondary6')
  })
})
