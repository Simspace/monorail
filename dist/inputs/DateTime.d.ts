import React, { ChangeEvent } from 'react';
import Datetime from 'react-datetime';
export declare const TypedDatetime: React.ComponentType<Datetime.DatetimepickerProps & {
    renderInput?: ((props: any, openCalendar: () => void, closeCalendar: () => void) => void) | undefined;
}>;
export declare type DateInputProps = {
    className: string;
    onChange: (event: ChangeEvent<HTMLElement>) => void;
    onClick: () => void;
    onFocus: () => void;
    onKeyDown: () => void;
    type: string;
};
