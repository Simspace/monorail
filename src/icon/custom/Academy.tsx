import React, { ComponentType } from 'react'
import { CustomIconProps } from 'src/icon/Icon'

export const Academy: ComponentType<CustomIconProps> = props => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 10.6667L12 12L17.5 10.6667V13.3333C16.3936 15.3449 12 15.3333 12 15.3333C12 15.3333 7.56599 15.2715 6.5 13.3333V10.6667Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6L1 8.66667L12 11.3333L23 8.66667L12 6Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.25 15C20.25 15.4208 19.9819 15.7809 19.6024 15.9285L20.9375 18.6667C20.3646 18.8889 19.7917 19 19.2188 19C18.6458 19 18.0729 18.8889 17.5 18.6667L18.8351 15.9285C18.4556 15.7809 18.1875 15.4208 18.1875 15C18.1875 14.5646 18.4745 14.1942 18.875 14.0569V9.33333H19.5625V14.0569C19.963 14.1942 20.25 14.5646 20.25 15Z"
    />
  </svg>
)
