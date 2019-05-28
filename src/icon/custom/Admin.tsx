import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/icon/Icon'

export const Admin: ComponentType<CustomIconProps> = props => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="4"
      y="4"
      width="32"
      height="32"
      rx="4"
      fill="url(#adminBackground)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 34L20 21L35 34H20H5Z"
      fill="#DF9117"
    />
    <path d="M2 14L23 33H2V14Z" fill="#FFD749" />
    <path d="M39 14L18 33H39V14Z" fill="#FFD749" />
    <g clipPath="url(#clip0)">
      <path
        d="M19.0015 9C16.8139 9 15.0381 10.7748 15.0381 12.9604C15.0381 14.5093 15.9308 15.8507 17.2263 16.5038V18.2954C17.2263 18.2954 18.6346 18.4073 18.6346 19.2694C18.6346 19.8683 17.91 20.1106 17.494 20.3472C17.3126 20.4509 16.9023 20.6737 17.4869 20.9778C17.7991 21.1444 18.5978 21.3421 18.5978 22.1184C18.5978 22.8977 17.3024 23.2692 17.3024 23.2692L19.0322 25L20.7738 23.2595V16.5038C22.0702 15.8512 22.9625 14.5098 22.9625 12.9604C22.9619 10.7748 21.1867 9 19.0015 9ZM16.1312 12.4821C16.3918 11.1361 17.5773 10.1171 19.0015 10.1171C20.4247 10.1171 21.6098 11.1361 21.8699 12.4826H16.1312V12.4821Z"
        fill="#DF9117"
      />
    </g>
    <g clipPath="url(#clip1)">
      <path
        d="M20.0017 7C17.5406 7 15.5428 8.99661 15.5428 11.4554C15.5428 13.198 16.5472 14.7071 18.0046 15.4418V17.4574C18.0046 17.4574 19.589 17.5833 19.589 18.5531C19.589 19.2269 18.7738 19.4994 18.3058 19.7656C18.1017 19.8823 17.6401 20.1329 18.2977 20.475C18.649 20.6624 19.5476 20.8849 19.5476 21.7582C19.5476 22.6349 18.0902 23.0528 18.0902 23.0528L20.0362 25L21.9955 23.0419V15.4418C23.454 14.7076 24.4578 13.1985 24.4578 11.4554C24.4572 8.99661 22.46 7 20.0017 7ZM16.7726 10.9173C17.0657 9.40307 18.3995 8.25672 20.0017 8.25672C21.6028 8.25672 22.936 9.40307 23.2286 10.9179H16.7726V10.9173Z"
        fill="#fff"
      />
    </g>
    <defs>
      <linearGradient
        id="adminBackground"
        x1="36"
        y1="4"
        x2="4"
        y2="36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFA820" />
        <stop offset="1" stopColor="#D18000" />
      </linearGradient>
      <clipPath id="clip0">
        <rect width="16" height="16" fill="#fff" transform="translate(11 9)" />
      </clipPath>
      <clipPath id="clip1">
        <rect width="18" height="18" fill="#fff" transform="translate(11 7)" />
      </clipPath>
    </defs>
  </svg>
)
