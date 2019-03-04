import { StatelessComponent } from 'react';
import { SimpleInterpolation } from 'styled-components';
declare type CCAvatarProps = {
    css?: SimpleInterpolation;
    team?: boolean;
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
