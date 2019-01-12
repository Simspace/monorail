import React from 'react'
import { CCDetails } from 'src/typography/Details'
import { SectionHeader } from 'src/typography/SectionHeader'
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'

export const TypographyDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Typography</DocTitle>
      <DocByLine>Typography elements</DocByLine>
      <SmartFrame>
        <ComponentShowcase>
          <CCDetails property="property" value="value" />
        </ComponentShowcase>
        <ComponentShowcase>
          <SectionHeader title="Section Header" />
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
)
