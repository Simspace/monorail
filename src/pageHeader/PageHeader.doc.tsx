import React from "react";
import { PageHeader } from "pageHeader/PageHeader";
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle
} from "src/design/Components/Documentation";
import { SmartFrame } from "src/design/Components/SmartFrame";
import { css } from "styled-components";

export const PageHeaderDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Page Header</DocTitle>
      <DocByLine>
        Page Headers gives the page and anchor. They provide a place for page
        wide actions and communicate to the user details about where they are
        within the app.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <PageHeader
            css={css`
              width: 90vw;
            `}
            title="Page Header"
          />
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
);
