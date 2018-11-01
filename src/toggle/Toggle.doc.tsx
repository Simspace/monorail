import React, { Component, Fragment, ReactNode } from 'react'
import { Toggle } from 'toggle/Toggle'
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
import { Icon } from 'icon/Icon'

type Props = {
  children: (
    params: {
      checked: boolean
      onChange: () => void
    },
  ) => ReactNode
}

type State = {
  checked: boolean
}

class ToggleController extends Component<Props, State> {
  state: State = {
    checked: true,
  }

  toggleActive = () => {
    this.setState(({ checked }) => ({
      checked: !checked,
    }))
  }

  render() {
    const { children } = this.props
    const { checked } = this.state

    return (
      <>
        {/* Render an icon before toggle so Styled components doesn't override 'StyledIconChecked' css with Icon css */}
        <Icon
          icon="add"
          css={css`
            display: none;
          `}
        />
        {children({ checked, onChange: this.toggleActive })}
      </>
    )
  }
}

export const ToggleDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Toggle</DocTitle>
      <DocByLine>
        A toggle is a switch that allows the user to change the state of a
        single setting on or off.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase>
          <ToggleController>
            {({ checked, onChange }) => (
              <Toggle checked={checked} onChange={onChange} />
            )}
          </ToggleController>
        </ComponentShowcase>
        <ComponentShowcase>
          <ToggleController>
            {({ checked, onChange }) => (
              <Toggle checked={!checked} onChange={onChange} />
            )}
          </ToggleController>
        </ComponentShowcase>
      </SmartFrame>
      <ToggleController>
        {({ checked, onChange }) => (
          <Toggle checked={!checked} onChange={onChange} />
        )}
      </ToggleController>
    </DocSection>

    <DocSection>
      <DocTitle>Usage</DocTitle>
      <DocContent bottom={80}>
        Use switches to:
        <ul>
          <li>Toggle a single option on or off</li>
          <li>Immediately activate or deactivate something</li>
        </ul>
      </DocContent>

      <DocHeading>Principles</DocHeading>
      <DocThreeColumn>
        <div>
          <DocSubHeading>Color</DocSubHeading>
          <DocContent>
            Toggle communicates it's status through the presence of Primary Link
            Color.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Shape</DocSubHeading>
          <DocContent>
            Toggle has a fully rounded radius to simulate a real world toggle.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Interaction</DocSubHeading>
          <DocContent>
            Toggle clearly communicates to the user through animation as it
            translates between states.
          </DocContent>
        </div>
      </DocThreeColumn>
    </DocSection>

    <DocSection>
      <DocTitle>Types</DocTitle>

      <ComponentExample
        name="Toggle On"
        content={
          <Fragment>
            When the Toggle is On we show a check icon, and color it and the
            track in the Primary Link Color.
            <br />
            <br />
            This helps the toggle clearly communicate to the user it's status.
          </Fragment>
        }
        component={
          <ToggleController>{props => <Toggle {...props} />}</ToggleController>
        }
        code={`<Toggle checked={true} onChange={isChecked => {}} />`}
      />

      <ComponentExample
        name="Toggle Off"
        content={
          <Fragment>
            When the Toggle is Off we show an X icon, and color it Black24 and
            the track White.
            <br />
            <br />
            This helps the toggle clearly communicate to the user it's status.
          </Fragment>
        }
        component={
          <ToggleController>
            {({ checked, onChange }) => (
              <Toggle checked={!checked} onChange={onChange} />
            )}
          </ToggleController>
        }
        code={`<Toggle checked={false} onChange={isChecked => {}} />`}
      />
    </DocSection>
  </DocPage>
)
