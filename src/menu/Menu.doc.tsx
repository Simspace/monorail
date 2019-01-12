import React from 'react'
import { Menu } from 'menu/Menu'
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'
import { css } from 'styled-components'
import { PopOver } from 'popOver/PopOver'
import { Button } from 'buttons/Button'
import { ListItem } from 'list/List'

export const MenuDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Menu</DocTitle>
      <DocByLine>Menus are useful for hiding secondary information.</DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <PopOver
            popOver={props => (
              <Menu {...props}>
                <ListItem>Menu Item</ListItem>
                <ListItem>Menu Item</ListItem>
                <ListItem>Menu Item</ListItem>
                <ListItem>Menu Item</ListItem>
              </Menu>
            )}
            toggle={props => <Button {...props}>Toggle Menu</Button>}
          />
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
)
