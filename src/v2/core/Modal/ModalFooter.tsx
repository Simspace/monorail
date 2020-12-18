import {
  ElevationRange,
  flexFlow,
  getElevationShadow,
} from '@monorail/helpers/exports'
import styled from '@monorail/helpers/styled-components'

export const ModalFooter = styled.div`
  ${flexFlow('row')};
  ${getElevationShadow(ElevationRange.Elevation6)};

  align-items: center;
  background: ${({ theme }) => theme.v2.FoundationPlate};
  height: 48px;
  justify-content: flex-end;
  margin: auto 0 0;
  padding: 0 16px;
  flex-shrink: 0;
`
