/// <reference types="react" />
import { Sizes } from '@monorail/helpers/size';
import { IconType } from '@monorail/visualComponents/icon/IconType';
declare type AvatarContainerProps = {
    team?: boolean;
    size?: Sizes;
};
export declare type AvatarProps = AvatarContainerProps & {
    first: string;
    last: string;
    icon?: IconType;
};
export declare const Avatar: ({ first, last, team, size, icon, ...domProps }: AvatarProps) => JSX.Element;
export declare const getAvatarInitials: (fullName: string) => {
    first: string;
    last: string;
};
export {};
