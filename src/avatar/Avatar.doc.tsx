import React, { Fragment } from 'react'
import { Avatar } from 'avatar/Avatar'
import {
  ComponentExample,
  ComponentShowcase,
  DocByLine,
  DocContent,
  DocHeading,
  DocPage,
  DocSection,
  DocSubHeading,
  DocThreeColumn,
  DocTitle,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'
import { css } from 'styled-components'

export const AvatarDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Avatar</DocTitle>
      <DocByLine>
        Avatars provide a visual token that is associated with a user. This
        helps give identity and visual importance to users.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <Avatar first="W" last="W" />
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>

    <DocSection>
      <DocTitle>Usage</DocTitle>
      <DocContent bottom={80}>
        Used in when you only have a Name or Title that needs emphasis.
        <ul>
          <li>Table rows</li>
          <li>Cards</li>
        </ul>
      </DocContent>
    </DocSection>

    <DocSection>
      <DocTitle>Types</DocTitle>

      <ComponentExample
        name="Individual Avatar"
        component={<Avatar first="W" last="W" />}
        content={
          <Fragment>
            The circular light blue avatar is used to represent a single person
          </Fragment>
        }
        code={`<Avatar first="W" last="W" />`}
      />

      <ComponentExample
        name="Team Avatar"
        component={<Avatar first="W" last="W" team={true} />}
        content={
          <Fragment>
            The rounded square dark blue avatar is used to represent a team or
            group of people
          </Fragment>
        }
        code={`<Avatar first="W" last="W" team={true} />`}
      />
    </DocSection>
  </DocPage>
)
