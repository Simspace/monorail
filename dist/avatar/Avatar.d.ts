import { StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
import { Sizes } from '@monorail/helpers/size';
declare type CCAvatarProps = {
    cssOverrides?: SimpleInterpolation;
    team?: boolean;
    size?: Sizes;
};
declare type AvatarProps = CCAvatarProps & {
    first: string;
    last: string;
};
export declare const Avatar: StatelessComponent<AvatarProps>;
export declare const getAvatarInitials: (fullName: string) => {
    first: string;
    last: string;
};
export {};
