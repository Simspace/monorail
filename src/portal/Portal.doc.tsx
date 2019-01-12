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
import { Button } from 'src/buttons/Button'

export const PortalPage = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Portal</DocTitle>
      <DocByLine>
        Portal is a functional component that allows you to place content
        intelligently over the application.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <Button>Toggle Portal</Button>
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
)
