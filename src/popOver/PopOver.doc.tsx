import React from 'react'
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'
import { css } from 'styled-components'
import { Button } from 'buttons/Button'

export const PopOverDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Pop Over</DocTitle>
      <DocByLine>
        Pop Over is a functional component that allows you to place content
        intelligently over the application.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <Button>Toggle Pop Over</Button>
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
)
