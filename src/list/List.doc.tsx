import React from 'react'
import { ListItem } from 'list/List'
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'
import { css } from 'styled-components'
import { Colors, colors } from 'CommonStyles'

export const ListDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Lists</DocTitle>
      <DocByLine>
        Ultimately data boils down to lists and tables. Lists are optimized for
        vertical skimming, which leads to long term data retention and trained
        muscle memory as this pattern is reinforced throughout the application.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <ListItem
            css={css`
              background: ${colors(Colors.White)};
              width: 240px;
            `}
          >
            List Item
          </ListItem>
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
)
