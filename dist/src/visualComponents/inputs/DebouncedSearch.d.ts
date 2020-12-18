import { FC } from 'react';
import { SearchProps } from '@monorail/visualComponents/inputs/Search';
declare type Props = {
    name?: string;
    onChange: SearchProps['onChange'];
    onBlur?: SearchProps['onBlur'];
    placeholder?: string;
    value: string;
    searchRef?: SearchProps['searchRef'];
};
export declare const DebouncedSearch: FC<Props>;
export {};
