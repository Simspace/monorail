import { ReactType } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Omit } from 'typelevel-ts';
import { ButtonProps } from '@monorail/buttons/Button';
import { IconButtonShape } from '@monorail/buttons/buttonTypes';
import { FCwDP } from '@monorail/sharedHelpers/react';
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
