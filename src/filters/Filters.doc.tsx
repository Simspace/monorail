import React from "react";
import { Filter } from "filters/Filter";
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle
} from "src/design/Components/Documentation";
import { SmartFrame } from "src/design/Components/SmartFrame";
import { css } from "styled-components";

export const FiltersDoc = () => (
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
          <Filter isOpen={false} isActive={false} title="Filter" />
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
);
