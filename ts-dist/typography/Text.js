import { typography, } from '@monorail/helpers/typography';
import styled, { css } from 'styled-components';
export const Text = styled.span(({ fontSize, fontWeight, margin = '' }) => css `
    ${typography(fontWeight, fontSize, margin)};
  `);
//# sourceMappingURL=Text.js.map