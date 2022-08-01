import React from 'react'

export function useForceUpdate(): () => void {
  const [, forceUpdate] = React.useState(false)
  return () => {
    forceUpdate(b => !b)
  }
}
