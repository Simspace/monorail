import { FC } from 'react';
import { SearchProps } from '@monorail/visualComponents/inputs/Search';
declare type Props = {
    name?: string;
    onChange: SearchProps['onChange'];
    placeholder?: string;
    value: string;
};
export declare const DebouncedSearch: FC<Props>;
export {};
