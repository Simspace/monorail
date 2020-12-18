import React from 'react';
import { O } from '@monorail/sharedHelpers/fp-ts-imports';
export declare const StaticLogo: (props: {
    logo: string | React.ReactElement;
}) => JSX.Element;
export declare const EditLogo: (props: {
    logo?: string | undefined;
    onRemove: () => void;
    onChange: (file: O.Option<File>) => void;
}) => JSX.Element;
