import { StatelessComponent } from 'react';
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
export declare const Avatar: StatelessComponent<AvatarProps>;
export declare const getAvatarInitials: (fullName: string) => {
    first: string;
    last: string;
};
export {};
//# sourceMappingURL=Avatar.d.ts.map