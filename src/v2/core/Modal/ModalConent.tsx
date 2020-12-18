import { flexFlow } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'
import { MODAL_SIZE, ModalSize } from '@monorail/v2/core/Modal/modalTypes'

export const ModalContent = styled.div<{ size?: ModalSize }>(
  ({ size }) => css`
    ${flexFlow()};
    height: 100%;
    max-height: 100%;
    overflow: auto;
    padding: ${size === MODAL_SIZE.Mini ? 16 : 24}px;
  `,
)
