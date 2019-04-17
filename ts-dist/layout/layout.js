import styled from 'styled-components';
import { flexFlow, gothamFontFamily } from '@monorail/helpers/exports';
export const AppContainer = styled.div `
  ${flexFlow()};

  flex: 1;
  overflow: hidden;

  &.event-design,
  &.events:not(.execution),
  &.home,
  &.reports-analytics {
    ${gothamFontFamily};
  }
`;
export const PageContent = styled.div `
  ${flexFlow()};

  flex: 1;
  overflow: hidden;
`;
//# sourceMappingURL=layout.js.map