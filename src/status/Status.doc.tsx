import React from 'react'
import { Status } from 'src/status/Status'
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'
import { css } from 'styled-components'

export const StatusDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Status</DocTitle>
      <DocByLine>
        Status acts as a counter giving visual importance to large data.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <Status>3</Status>
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
)
