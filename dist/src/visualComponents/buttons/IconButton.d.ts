import { FC } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { ButtonProps } from '@monorail/visualComponents/buttons/Button';
import { IconButtonShape } from '@monorail/visualComponents/buttons/buttonTypes';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare const StyledIconButton: any;
export declare type IconButtonProps = Omit<ButtonProps, 'leftIcon' | 'rightIcon'> & {
    shape?: IconButtonShape;
    iconCss?: SimpleInterpolation;
    icon: IconType;
};
export declare const IconButton: FC<IconButtonProps>;
//# sourceMappingURL=IconButton.d.ts.map