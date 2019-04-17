import React from 'react';
import styled, { css } from 'styled-components';
import { borderRadius, Colors, getColor } from '@monorail/helpers/exports';
const size = 24;
const CCAvatar = styled.div(({ team, cssOverrides }) => css `
    ${team
    ? css `
          ${borderRadius()};

          background: ${getColor(Colors.BrandDarkBlue)};
        `
    : css `
          background: ${getColor(Colors.BrandLightBlue)};
          border-radius: ${size / 2}px;
        `};

    color: ${getColor(Colors.White)};
    flex-shrink: 0;
    font-size: 9.89px;
    font-weight: 900;
    height: ${size}px;
    line-height: ${size}px;
    text-align: center;
    text-transform: uppercase;
    user-select: none;
    width: ${size}px;

    ${cssOverrides};
  `);
export const Avatar = ({ cssOverrides, first, last, team, ...otherProps }) => (React.createElement(CCAvatar, Object.assign({ cssOverrides: cssOverrides, team: team }, otherProps),
    first.charAt(0),
    last.charAt(0)));
export const getAvatarInitials = (fullName) => {
    const initials = fullName.match(/\b\w/g) || [];
    return {
        first: initials.shift() || '',
        last: initials.pop() || '',
    };
};
//# sourceMappingURL=Avatar.js.map