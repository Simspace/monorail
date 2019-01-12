import React from 'react'
import { Tag } from 'src/tags/Tag'
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

export const TagsDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Tags</DocTitle>
      <DocByLine>
        Tags are a compact element that represents an attribute.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <Tag icon="person" label="tag" />
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>

    <DocSection>
      <DocTitle>Usage</DocTitle>
      <DocContent bottom={80}>
        Use Tags to visually label UI objects for quick recognition and
        navigation
        <ul>
          <li>Categories</li>
          <li>Metadata</li>
        </ul>
      </DocContent>

      <DocHeading>Principles</DocHeading>
      <DocThreeColumn>
        <div>
          <DocSubHeading>Multiple</DocSubHeading>
          <DocContent>
            Use Tags when content is mapped to multiple categories, and the user
            needs a way to differentiate between them.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Filterable</DocSubHeading>
          <DocContent>
            Tags can also be used as a method of filtering data, to show only
            items within that particular category.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Distinct</DocSubHeading>
          <DocContent>
            The distinctive visual style of labels deliberately deviates from
            Buttons. This prevents users from confusing labels with Buttons and
            allows labels to co-exist with other components without competing
            for a user's attention with primary and secondary Buttons on the
            screen.
          </DocContent>
        </div>
      </DocThreeColumn>
    </DocSection>

    <DocSection>
      <DocTitle>Types</DocTitle>

      <ComponentExample
        name="Tag"
        content={
          <>
            You can include an Icon in a Tag. The Icon should be aligned to the
            left of the text.
          </>
        }
        component={<Tag icon="person" label="tag" />}
        code={`<Tag icon="person" label="tag" />`}
      />

      <ComponentExample
        name="Tag | Circle"
        content={<>Circular Tag with no text label</>}
        component={<Tag icon="person" />}
        code={`<Tag icon="person" />`}
      />
    </DocSection>
  </DocPage>
)
