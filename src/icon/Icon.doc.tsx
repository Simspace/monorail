import React from "react";
import { Icon } from "icon/Icon";
import {
  ComponentShowcase,
  DocByLine,
  DocPage,
  DocSection,
  DocTitle
} from "src/design/Components/Documentation";
import { SmartFrame } from "src/design/Components/SmartFrame";
import { css } from "styled-components";

export const IconsDoc = () => (
  <DocPage>
    <DocSection>
      <DocTitle>Icons</DocTitle>
      <DocByLine>
        Icons help distill words and concepts into a simple pictogram. Icons
        therefor have meaning and act almost as a dictionary. Try to keep the
        usage constant so that the definition of an Icon doesn't expand to the
        point where its meaning can become confusing.
      </DocByLine>
      <SmartFrame>
        <ComponentShowcase
          css={css`
            grid-column: -1 / 1;
          `}
        >
          <Icon icon="add" />
        </ComponentShowcase>
      </SmartFrame>
    </DocSection>
  </DocPage>
);
