import { Colors, getColor } from '@monorail/helpers/color'
import styled, { css } from '@monorail/helpers/styled-components'

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

    ${disabled
      ? css`
          cursor: default;
          opacity: 0.24;
        `
      : css`
          ${highlighted &&
            css`
              background: ${getColor(Colors.Black24, 0.16)};
            `};

          ${selected &&
            css`
              background: ${getColor(Colors.BrandLightBlue, 0.2)};
            `};

          ${highlighted &&
            selected &&
            css`
              background: ${getColor(Colors.BrandLightBlue, 0.24)};
            `};
        `};
  `,
)
