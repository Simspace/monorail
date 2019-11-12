import React, { FC } from 'react'
import Lottie from 'react-lottie'

import animationData from './loadingGeneric.json'

type Props = { size?: number }

export const LoadingGeneric: FC<Props> = ({ size = 64 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  return <Lottie options={defaultOptions} height={size} width={size} />
}
