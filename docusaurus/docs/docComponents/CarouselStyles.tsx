import { flexFlow } from '@monorail/helpers/exports'
import styled, { css } from '@monorail/helpers/styled-components'

export const CardSlide = css`
  ${flexFlow('row')}
  height: 160px;
  width: 133px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const FullSlide = css`
  ${flexFlow('row')};
  flex-grow: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const FullWidth = styled.div`
  ${flexFlow('row')};
  flex: 1;
  height: 100%;
`

export const SlideOne = css`
  background: #cffaff;
`

export const SlideTwo = css`
  background: #cfffd4;
`

export const SlideThree = css`
  background: #dad9ff;
`
export const CardOne = styled.div`
  ${flexFlow('row')};
  height: 160px;
  width: 200px;
  flex-grow: 1;

  justify-content: center;
  align-items: center;
  text-align: center;
  background: #cffaff;
`

export const CardTwo = styled.div`
  ${flexFlow('row')};
  height: 160px;
  width: 200px;
  flex-grow: 1;

  justify-content: center;
  align-items: center;
  text-align: center;
  background: #cfffd4;
`

export const CardThree = styled.div`
  ${flexFlow('row')};
  height: 160px;
  width: 200px;
  flex-grow: 1;

  justify-content: center;
  align-items: center;
  text-align: center;
  background: #dad9ff;
`
