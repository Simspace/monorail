import styled, { css } from 'styled-components';
import { typography, FontSizes } from '@monorail/helpers/exports';
export const SectionTitle = styled.h1(({ margin = '16px', cssOverrides }) => css `
    ${typography(500, FontSizes.Title3, margin)};

    ${cssOverrides};
  `);
//# sourceMappingURL=Typography.js.map