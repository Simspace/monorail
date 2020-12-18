import styled from 'styled-components'

import { flexFlow, Colors, getColor } from '@monorail/helpers/exports'

export const Footer = styled.footer`
  ${flexFlow('row')}
  align-items: center;
  height: 16px;
  padding: 0 16px 8px;
`

export const FooterList = styled.ul`
  align-items: center;
  display: flex;
  margin: 0;
  padding: 0;
`

// fake bullet so we can have more control over its color and position, fixed
// line-height so that side-by-side elements are vertically aligned correctly
export const FooterListItem = styled.li`
  line-height: 16px;
  list-style-type: none;
  margin-left: 8px;
  padding-left: 12px;
  position: relative;

  &::before {
    background-color: ${getColor(Colors.Gray54)};
    border-radius: 50%;
    content: '';
    height: 4px;
    left: 0;
    margin-top: -2px;
    position: absolute;
    top: 50%;
    width: 4px;
  }

  &:first-child {
    margin-left: 0;
    padding-left: 0;
  }

  &:first-child::before {
    display: none;
  }
`
