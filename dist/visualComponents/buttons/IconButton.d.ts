import { ReactType } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Omit } from 'typelevel-ts';
import { FCwDP } from '@monorail/sharedHelpers/react';
import { ButtonProps } from '@monorail/visualComponents/buttons/Button';
import { IconButtonShape } from '@monorail/visualComponents/buttons/buttonTypes';
declare type Props = {
    icon: string;
    passedAs?: ReactType;
};
declare type DefaultProps = Omit<ButtonProps, 'leftIcon' | 'rightIcon'> & {
    shape: IconButtonShape;
    iconCss: SimpleInterpolation;
};
export declare type IconButtonProps = Props & DefaultProps;
export declare const IconButton: FCwDP<Props, DefaultProps>;
export {};
