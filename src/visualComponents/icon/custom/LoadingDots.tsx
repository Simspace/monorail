import React, { ComponentType } from 'react'

import { CustomIconProps } from '@monorail/visualComponents/icon/Icon'
import styled, { css } from '@monorail/helpers/styled-components'

const StyledLoadingDots = styled.svg<CustomIconProps>(
  ({ cssOverrides }) => css`
    .loadingFadeInline {
      animation: loadingFadeInline 1.1s infinite;
    }

    .typing-dots {
      animation-delay: 0.1;
    }
    .typing-dots:nth-child(2) {
      animation-delay: 0.2s;
    }
    .typing-dots:nth-child(3) {
      animation-delay: 0.3s;
    }

    @keyframes loadingFadeInline {
      0% {
        opacity: 0.2;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.2;
      }
    }

    ${cssOverrides}
  `,
)

export const LoadingDots: ComponentType<CustomIconProps> = props => (
  <StyledLoadingDots
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <circle
      className="typing-dots loadingFadeInline"
      cx="6"
      cy="12"
      r="2"
      fill="#000"
    />
    <circle
      className="typing-dots loadingFadeInline"
      cx="12"
      cy="12"
      r="2"
      fill="#000"
    />
    <circle
      className="typing-dots loadingFadeInline"
      cx="18"
      cy="12"
      r="2"
      fill="#000"
    />
  </StyledLoadingDots>
)
