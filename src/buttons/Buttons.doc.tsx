import React, { Fragment } from 'react'
import { Button } from 'buttons/Button'
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
import { ButtonDisplay, ButtonSize } from 'buttons/buttonTypes'

export const ButtonsDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Button</DocTitle>
      <DocByLine>
        Buttons allow users to take actions, and make choices, with a single
        click.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <Button>Button</Button>
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>

    <DocSection>
      <DocTitle>Usage</DocTitle>

      <DocContent bottom={80}>
        Buttons communicate actions that users can take. They are typically
        placed throughout your UI, in places like:
        <ul>
          <li>Dialogs</li>
          <li>Modals</li>
          <li>Forms</li>
          <li>Cards</li>
          <li>Toolbars</li>
        </ul>
      </DocContent>

      <DocHeading>Principles</DocHeading>
      <DocThreeColumn>
        <div>
          <DocSubHeading>Identifiable</DocSubHeading>
          <DocContent>
            Buttons should indicate that they can trigger an action.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Findable</DocSubHeading>
          <DocContent>
            Buttons should be easy to find among other elements, including other
            buttons.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Clear</DocSubHeading>
          <DocContent>A button’s action and state should be clear.</DocContent>
        </div>
      </DocThreeColumn>
    </DocSection>

    <DocSection>
      <DocTitle>Types</DocTitle>

      <DocHeading top={64} bottom={-16}>
        Display
      </DocHeading>

      <ComponentExample
        name="Primary (high emphasis)"
        component={<Button>Button</Button>}
        content={
          <Fragment>
            Primary buttons have more emphasis, as they use the Primary Link
            Color as a fill. Aim to have only one Primary button on a page so
            that the user knows what the main action is.
          </Fragment>
        }
        code={`<Button>Button</Button>`}
      />

      <ComponentExample
        name="Outline (medium-high emphasis)"
        component={<Button display={ButtonDisplay.Outline}>Button</Button>}
        content={
          <Fragment>
            Outline buttons act almost as a second primary button. Use if there
            is a second action on the page that is almost as important as the
            primary action. Use sparingly. If you have more then 2 Outline
            Buttons on a page, convert them to Secondary.
          </Fragment>
        }
        code={`<Button display={ButtonDisplay.Outline}>Button</Button>`}
      />

      <ComponentExample
        name="Secondary (medium emphasis)"
        component={<Button display={ButtonDisplay.Secondary}>Button</Button>}
        content={
          <Fragment>
            Secondary buttons less emphasis, which allows them to be used
            multiple times on a page without distracting from the Primary
            button. These work for most of the actions on a page.
          </Fragment>
        }
        code={`<Button display={ButtonDisplay.Secondary}>Button</Button>`}
      />

      <ComponentExample
        name="Chromeless (low emphasis)"
        component={<Button display={ButtonDisplay.Chromeless}>Button</Button>}
        content={
          <Fragment>
            Chromeless buttons are used for less important actions. Typically
            used in conjunction with another button. For instance used as the
            cancel next to submit.
          </Fragment>
        }
        code={`<Button display={ButtonDisplay.Chromeless}>Button</Button>`}
      />

      <DocHeading top={64} bottom={-16}>
        Size
      </DocHeading>

      <ComponentExample
        name="Large (high emphasis)"
        component={<Button size={ButtonSize.Large}>Button</Button>}
        content={<Fragment>Large Button</Fragment>}
        code={`<Button size={ButtonSize.Large}>Button</Button>`}
      />

      <ComponentExample
        name="Default (medium> emphasis)"
        component={<Button>Button</Button>}
        content={<Fragment>Default Button</Fragment>}
        code={`<Button>Button</Button>`}
      />

      <ComponentExample
        name="Compact (medium emphasis)"
        component={<Button size={ButtonSize.Compact}>Button</Button>}
        content={<Fragment>Compact Button</Fragment>}
        code={`<Button size={ButtonSize.Compact}>Button</Button>`}
      />

      <ComponentExample
        name="Dense (low emphasis)"
        component={<Button size={ButtonSize.Dense}>Button</Button>}
        content={<Fragment>Dense Button</Fragment>}
        code={`<Button size={ButtonSize.Dense}>Button</Button>`}
      />
    </DocSection>
  </DocPage>
)
