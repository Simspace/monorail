import { FunctionComponent } from 'react';
declare type HasDefaultProps<DefaultProps> = {
    defaultProps: DefaultProps;
};
export declare type FCwDP<Props, DefaultProps> = FunctionComponent<Props> & HasDefaultProps<DefaultProps>;
export {};
