import React from 'react'
import { TabBar } from 'tabs/TabBar'
import { Tab } from 'tabs/Tab'
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'
import { css } from 'styled-components'

export const TabsDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Tabs</DocTitle>
      <DocByLine>
        Tabs organize content across different screens, data sets, and other
        interactions.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <TabBar>
            <Tab>First Tab</Tab>
            <Tab>Second Tab</Tab>
            <Tab>Third Tab</Tab>
          </TabBar>
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
)
