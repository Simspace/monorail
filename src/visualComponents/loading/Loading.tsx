import React, { FC } from 'react'
import Lottie from 'react-lottie'

import { flexFlow } from '@monorail/helpers/flex'
import styled from '@monorail/helpers/styled-components'

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

type Props = { size?: number; loaderType?: LoaderType }

export const Loading: FC<Props> = ({
  size = 64,
  loaderType = LoaderType.SimSpace,
}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingJson[loaderType],
  }

  return <Lottie options={defaultOptions} height={size} width={size} />
}

export const LoadingContainer = styled.div`
  ${flexFlow()};

  align-items: center;
  flex: 1 1 100%;
  height: 100%;
  justify-content: center;
  width: 100%;
`
