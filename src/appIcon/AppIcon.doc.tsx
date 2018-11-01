import React, { Fragment } from 'react'
import { css } from 'styled-components'

import { AppIcon } from 'appIcon/AppIcon'
import {
  AppName,
  BorderRadius,
  borderRadius,
} from 'CommonStyles'
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
  DocTwoColumn,
} from 'src/design/Components/Documentation'
import { SmartFrame } from 'src/design/Components/SmartFrame'

const appIconCss = css`
  ${borderRadius(BorderRadius.Large)};

  height: 64px;
  width: 64px;
`

export const AppIconDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>App Icon</DocTitle>
      <DocByLine>
        App Icons are unique identifiers that communicate to a user the context
        of the actions within.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <AppIcon appName={AppName.Hardhat} css={appIconCss} />
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>

    <DocSection>
      <DocTitle>Usage</DocTitle>
      <DocContent bottom={80}>
        App Icons communicate the context of actions. They are also used as
        navigation items signifying the app you are about to go to. They are
        typically placed throughout the UI, in places like:
        <ul>
          <li>Cards</li>
          <li>Sections</li>
          <li>Navigation</li>
        </ul>
      </DocContent>

      <DocHeading>Principles</DocHeading>
      <DocThreeColumn>
        <div>
          <DocSubHeading>Color</DocSubHeading>
          <DocContent>
            App Icons should have the background color associated with that app.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Shape</DocSubHeading>
          <DocContent>
            App Icons are always square and have rounded corners.
          </DocContent>
        </div>
        <div>
          <DocSubHeading>Size</DocSubHeading>
          <DocContent>
            App Icons are always square and have rounded corners
          </DocContent>
        </div>
      </DocThreeColumn>
    </DocSection>

    <DocSection>
      <DocTitle>Types</DocTitle>

      <ComponentExample
        name="Admin"
        component={<AppIcon appName={AppName.Admin} css={appIconCss} />}
        content={<Fragment>Admin App Icon.</Fragment>}
        code={`<AppIcon appName={AppName.Admin} />`}
      />

      <ComponentExample
        name="Dashboard"
        component={<AppIcon appName={AppName.Dashboard} css={appIconCss} />}
        content={<Fragment>Dashboard App Icon.</Fragment>}
        code={`<AppIcon appName={AppName.Dashboard} />`}
      />

      <ComponentExample
        name="Hardhat"
        component={<AppIcon appName={AppName.Hardhat} css={appIconCss} />}
        content={<Fragment>Hardhat App Icon.</Fragment>}
        code={`<AppIcon appName={AppName.Hardhat} />`}
      />

      <ComponentExample
        name="Impact"
        component={<AppIcon appName={AppName.Impact} css={appIconCss} />}
        content={<Fragment>Impact App Icon.</Fragment>}
        code={`<AppIcon appName={AppName.Impact} />`}
      />

      <ComponentExample
        name="Range"
        component={<AppIcon appName={AppName.Range} css={appIconCss} />}
        content={<Fragment>Range App Icon.</Fragment>}
        code={`<AppIcon appName={AppName.Range} />`}
      />

      <ComponentExample
        name="Tracker"
        component={<AppIcon appName={AppName.Tracker} css={appIconCss} />}
        content={<Fragment>Tracker App Icon.</Fragment>}
        code={`<AppIcon appName={AppName.Tracker} />`}
      />

      <ComponentExample
        name="Training"
        component={<AppIcon appName={AppName.Training} css={appIconCss} />}
        content={<Fragment>Training App Icon.</Fragment>}
        code={`<AppIcon appName={AppName.Training} />`}
      />
    </DocSection>
  </DocPage>
)
