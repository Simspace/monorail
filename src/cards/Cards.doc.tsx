import React from 'react'
import { BBCardBackground, BBCardHeader } from 'src/cards/Cards'
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'
import { css } from 'styled-components'
import { Div } from 'src/StyleHelpers'
import { FontSizes, typography } from 'src/CommonStyles'

export const CardsDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Cards</DocTitle>
      <DocByLine>
        Cards act as a slice into another application, or as a micro app that
        allows the user the complete actions along a single subject that can be
        different than the page subject.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <BBCardBackground
            css={css`
              width: 240px;
            `}
          >
            <BBCardHeader title="card" />
            <Div
              css={css`
                ${typography(400, FontSizes.Content, '16px 0')};

                margin-left: 16px;
                margin-right: 16px;
              `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Div>
          </BBCardBackground>
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
)
