import React, { Fragment } from "react";
import { LogoBox } from "brand/LogoBox";
import { Point3, Miter, SimSpaceLogo, SimSpaceLogoFlat } from "brand/Logo";
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
  DocTwoColumn
} from "src/design/Components/Documentation";
import { SmartFrame } from "src/design/Components/SmartFrame";
import { css } from "styled-components";
import { CodeHighlight } from "src/design/Components/CodeHighlight";
import { BorderRadius, borderRadius } from "CommonStyles";

const logoCss = css`
  height: 32px;
`;

export const BrandDoc = () => (
  <Fragment>
    <DocPage>
      <DocSection>
        <DocTitle>Brand</DocTitle>
        <DocByLine>
          Highlight the involvement of third parties within the SimSpace
          platform. Provides a visual validation of the author of the content
          for the user viewing it.
        </DocByLine>
        <SmartFrame>
          <ComponentShowcase
            css={css`
              grid-column: -1 / 1;
            `}
          >
            <LogoBox>
              <SimSpaceLogo />
            </LogoBox>
          </ComponentShowcase>
        </SmartFrame>
      </DocSection>
      <DocSection>
        <DocTitle>Usage</DocTitle>
        <DocContent bottom={80}>
          Communicates authoring of content. Used in sections where it would be
          beneficial for the user to know the source of the material, like:
          <ul>
            <li>Event headers</li>
            <li>Content catalog cards</li>
            <li>Content overview</li>
          </ul>
        </DocContent>

        <DocHeading>Principles</DocHeading>
        <DocThreeColumn>
          <div>
            <DocSubHeading>Identifiable</DocSubHeading>
            <DocContent>
              Logos and branding elements should be easily identifiable from
              each other.
            </DocContent>
          </div>
          <div>
            <DocSubHeading>Shape</DocSubHeading>
            <DocContent>
              All brand elements will be shown with a white background with
              rounded borders.
            </DocContent>
          </div>
          <div>
            <DocSubHeading>Size</DocSubHeading>
            <DocContent>Brand elements size should remain standard.</DocContent>
          </div>
        </DocThreeColumn>
      </DocSection>
      <DocSection>
        <DocTitle>Types</DocTitle>
        <DocHeading top={64} bottom={16}>
          SimSpace Logo
        </DocHeading>
        <DocByLine>
          Default logo for SimSpace. Other logos should be created and used in
          the branding elements in a similar way.
        </DocByLine>
        <ComponentExample
          name="Default"
          component={<SimSpaceLogo css={logoCss} />}
          content={
            <Fragment>
              The SimSpace Logo is a vector svg image that adjust to the
              available space.
            </Fragment>
          }
          code={`<SimSpaceLogo />`}
        />
        <DocHeading top={64} bottom={16}>
          Logo Box
        </DocHeading>
        <DocByLine>
          Logo Box allows to display logos in a standardized way across the
          platform.
          <br />
          <br />
          It should be used anytime the author logo is displayed as a part of a
          content preview or detail.
        </DocByLine>
        <ComponentExample
          name="Default"
          component={
            <LogoBox>
              <SimSpaceLogo />
            </LogoBox>
          }
          content={
            <Fragment>
              It creates a container with white background and rounded corners.{" "}
              <br />
              <br />
              The Logo Box is by default positioned relative.
            </Fragment>
          }
          code={`<LogoBox><SimSpaceLogo /></LogoBox>`}
        />
        <ComponentExample
          name="Top left aligned"
          component={
            <LogoBox alignLeft>
              <SimSpaceLogo />
            </LogoBox>
          }
          content={
            <Fragment>
              It can be aligned to the top left including the prop{" "}
              <b>alignLeft</b>
            </Fragment>
          }
          code={`<LogoBox alignLeft><SimSpaceLogo /></LogoBox>`}
        />
        <ComponentExample
          name="Top right aligned"
          component={
            <LogoBox alignRight>
              <SimSpaceLogo />
            </LogoBox>
          }
          content={
            <Fragment>
              Similarly, it can be aligned to the top right including the prop{" "}
              <b>alignRight</b>
            </Fragment>
          }
          code={`<LogoBox alignRight><SimSpaceLogo /></LogoBox>`}
        />
      </DocSection>
    </DocPage>
  </Fragment>
);
