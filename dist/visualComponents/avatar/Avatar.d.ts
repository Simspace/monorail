import { StatelessComponent } from 'react';
import { Sizes } from '@monorail/helpers/size';
declare type AvatarContainerProps = {
    team?: boolean;
    size?: Sizes;
};
export declare type AvatarProps = AvatarContainerProps & {
    first: string;
    last: string;
    icon?: string;
};
export declare const Avatar: StatelessComponent<AvatarProps>;
export declare const getAvatarInitials: (fullName: string) => {
    first: string;
    last: string;
};
export {};
