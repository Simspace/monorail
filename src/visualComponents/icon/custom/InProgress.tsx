import styled, { css } from '@monorail/helpers/styled-components'
import { IconProps } from '@monorail/visualComponents/icon/Icon'

export const PulseAnimation = (
  scale: number = 0.5,
  radius: number = 0.5,
) => css`
  &:before {
    animation: pulse 2s infinite;
    border-radius: 50%;
    box-shadow: 0 0 0 0 currentColor;
    content: '';
    display: block;
    margin: ${(1 - scale) / 2}em;
    height: ${scale}em;
    position: absolute;
    width: ${scale}em;

    @keyframes pulse {
      0% {
        transform: scale(0.1);
        box-shadow: 0 0 0 0 currentColor;
        opacity: 0.7;
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 ${radius}em currentColor;
        opacity: 0.1;
      }

      100% {
        transform: scale(0.9);
        box-shadow: 0 0 0 0 currentColor;
        opacity: 0;
      }
    }
  }
`

export const InProgress = styled.div<IconProps>(
  ({ size = 16, cssOverrides }) => {
    return css`
      font-size: ${size}px;
      position: relative;

      &:after {
        background: currentColor;
        border-radius: 50%;
        content: '';
        display: block;
        height: 1em;
        width: 1em;
        transform: scale(0.6);
      }

      ${PulseAnimation()}

      ${cssOverrides}
    `
  },
)
