import React, { FC } from 'react'
import Lottie from 'react-lottie'

import animationData from './loadingData.json'

type Props = { size?: number }

export const Loading: FC<Props> = ({ size = 64 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  }

  return <Lottie options={defaultOptions} height={size} width={size} />
}
