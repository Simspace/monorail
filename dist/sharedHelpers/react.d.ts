import { FunctionComponent } from 'react';
declare type HasDefaultProps<DefaultProps> = {
    defaultProps: DefaultProps;
};
export declare type FCwDP<RequiredProps, DefaultProps> = FunctionComponent<RequiredProps & DefaultProps> & HasDefaultProps<DefaultProps>;
export {};
