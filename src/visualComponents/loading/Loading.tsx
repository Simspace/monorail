import React, { FC } from 'react'
import Lottie from 'react-lottie'

import loadingData from './loadingData.json'
import loadingGenericData from './loadingGenericData.json'
import loadingPcteData from './loadingPcteData.json'

export enum LoaderType {
  SimSpace = 'simspace',
  Generic = 'generic',
  Pcte = 'pcte',
}

const loadingJson = {
  [LoaderType.SimSpace]: loadingData,
  [LoaderType.Generic]: loadingGenericData,
  [LoaderType.Pcte]: loadingPcteData,
}

type Dimensions = {
  _type: 'dimensions'
} & (
  | {
      height: number
    }
  | {
      width: number
    }
)

export type Size =
  | {
      _type: 'size'
      hw: number
    }
  | Dimensions

const getHeight = (d: Dimensions) => ('height' in d ? d.height : undefined)
const getWidth = (d: Dimensions) => ('width' in d ? d.width : undefined)

type Props = { size?: Size; loaderType?: LoaderType }

export const Loading: FC<Props> = ({
  size = { _type: 'size', hw: 64 },
  loaderType = LoaderType.SimSpace,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson[loaderType],
  }

  /* Lottie adds ariaRole='button' by default, since that makes total sense PG 2/13/20 */
  return size._type === 'size' ? (
    <Lottie
      ariaRole=""
      options={defaultOptions}
      height={size.hw}
      width={size.hw}
    />
  ) : (
    <Lottie
      ariaRole=""
      options={defaultOptions}
      height={getHeight(size)}
      width={getWidth(size)}
    />
  )
}
