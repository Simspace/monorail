import React, { FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ButtonProps, StyledButtonProps } from '@monorail/visualComponents/buttons/Button';
import { IconButtonShape } from '@monorail/visualComponents/buttons/buttonTypes';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare const StyledIconButton: import("styled-components").StyledComponent<React.FC<ButtonProps>, import("../../helpers/theme").GlobalAppThemeInterface, StyledButtonProps, never>;
export declare type IconButtonProps = Omit<ButtonProps, 'leftIcon' | 'rightIcon'> & {
    shape?: IconButtonShape;
    iconCss?: SimpleInterpolation;
    icon: IconType;
};
export declare const IconButton: FC<IconButtonProps>;
