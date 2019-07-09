import { FC, MouseEventHandler } from 'react';
import { LinkProps } from 'react-router';
export declare const FramedLink: FC<{
    to: LinkProps['to'];
    categoryId: string;
    isArchived?: boolean;
    onClick?: MouseEventHandler;
}>;
