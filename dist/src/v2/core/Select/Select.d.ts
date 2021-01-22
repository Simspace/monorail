import React from 'react';
import * as MUI from '@material-ui/core';
import { Merge } from 'type-fest';
import { OmitBannedProps } from '@monorail/v2/shared/helpers';
declare const Position: {
    readonly Above: "above";
    readonly Below: "below";
};
declare type PositionValue = typeof Position[keyof typeof Position];
export declare type SelectProps<T> = Merge<OmitBannedProps<Omit<MUI.SelectProps, 'placeholder'>>, {
    popoverPosition: PositionValue;
    value?: T;
    defaultValue?: T;
    renderValue?: (value: T) => React.ReactNode;
    /**
     * Note: `event.value` comes from child `MenuItem`'s `data-value` attribute, which is always a string
     */
    onChange?: (event: React.ChangeEvent<{
        name?: string;
        value: string;
    }>, child: React.ReactNode) => void;
    SelectDisplayProps?: Pick<MUI.SelectProps, 'SelectDisplayProps'> & {
        'data-test-id'?: string;
    };
}> & ({
    'aria-labelledby': string;
} | {
    'aria-label': string;
});
/**
 * Select components are used for collecting user provided information from a list of options.
 *
 * - [Select | Material-UI](https://material-ui.com/components/selects/)
 * - [Select | Monorail Figma](https://www.figma.com/file/dKL9YeHgWyxmRHuIjs38f3O9/Monorail-Components?node-id=21759%3A20652)
 *
 * Note: This component is a BETA because
 *
 * - It doesn't auto-detect `position`
 * - Object values require a bit of work
 */
export declare function Select<T>(props: SelectProps<T>): JSX.Element;
export {};
