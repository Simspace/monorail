import React from 'react';
import * as O from 'fp-ts/lib/Option';
export declare const StaticLogo: (props: {
    logo: string | React.ReactElement;
}) => JSX.Element;
export declare const EditLogo: (props: {
    logo?: string | undefined;
    onRemove: () => void;
    onChange: (file: O.Option<File>) => void;
}) => JSX.Element;
