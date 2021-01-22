import styled, { css } from '@monorail/helpers/styled-components'
import { ColorToken } from '@monorail/v2/core/theme/colors'

type StyledItemProps = {
  selected: boolean
  highlighted: boolean
  disabled?: boolean
}

export const DropdownItem = styled.div<StyledItemProps>(
  ({ selected, highlighted, disabled }) => css`
    position: relative;
    cursor: pointer;
    display: block;
    line-height: 1em;
    font-size: 11px;
    padding: 8px;
    word-break: break-word;
    border-left: 4px solid transparent;

    ${disabled
      ? css`
          cursor: default;
          opacity: 0.24;
        `
      : css`
          ${highlighted &&
            css`
              background: ${ColorToken.Blue050};
              border-left: 4px solid ${ColorToken.Blue300};
            `};

          ${selected &&
            css`
              background: ${ColorToken.Blue050};
              border-left: 4px solid ${ColorToken.Blue600};
            `};

          ${highlighted &&
            selected &&
            css`
              background: ${ColorToken.Blue100};
              border-left: 4px solid ${ColorToken.Blue600};
            `};
        `};
  `,
)
