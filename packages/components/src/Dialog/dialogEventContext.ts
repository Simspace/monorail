import React from 'react'

export interface DialogEventContext {
  onClose?: (
    event: {},
    reason: 'headerCloseButtonClick' | 'backdropClick' | 'escapeKeyDown',
  ) => void
}

export const DialogEventContext = React.createContext<DialogEventContext>({})

if (process.env.NODE_ENV !== 'production') {
  DialogEventContext.displayName = 'DialogEventContext'
}
