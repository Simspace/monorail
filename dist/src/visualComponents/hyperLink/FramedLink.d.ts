import { FC, MouseEventHandler } from 'react';
import { Link, LinkProps } from 'react-router';
import { CategoryId } from '@monorail/helpers/categoryTransforms';
export declare const LinkContainer: import("styled-components").StyledComponent<Link, import("../../helpers/theme").GlobalAppThemeInterface, {}, never>;
export declare const FramedLink: FC<{
    to: LinkProps['to'];
    categoryId: CategoryId;
    isArchived?: boolean;
    onClick?: MouseEventHandler;
    title?: string;
}>;
